import fs from 'fs'
import path from 'path'

const VELOG_USERNAME = 'taebin0416'

const fetchGraphQL = async (query, variables = {}) => {
  const response = await fetch('https://v2.velog.io/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables })
  })

  const json = await response.json()

  if (json.errors?.length) {
    throw new Error(`Velog GraphQL Error: ${JSON.stringify(json.errors)}`)
  }

  return json.data
}

const fetchPosts = async () => {
  const data = await fetchGraphQL(
    `
      query Posts($username: String!) {
        posts(username: $username) {
          id
          title
          url_slug
          released_at
          short_description
          thumbnail
        }
      }
    `,
    { username: VELOG_USERNAME }
  )

  if (!data?.posts) {
    throw new Error('No posts returned from Velog API')
  }

  return data.posts
}

const fetchPostBody = async (id) => {
  const data = await fetchGraphQL(
    `
      query Post($id: ID!) {
        post(id: $id) {
          body
        }
      }
    `,
    { id }
  )

  return data?.post?.body ?? ''
}

const savePosts = async () => {
  try {
    const posts = await fetchPosts()

    const formatted = await Promise.all(
      posts.map(async post => {
        const body = await fetchPostBody(post.id)

        return {
          id: post.id,
          title: post.title,
          slug: post.url_slug,
          date: post.released_at,
          description: post.short_description,
          thumbnail: post.thumbnail,
          body,
          category: 'dev'
        }
      })
    )

    const filePath = path.resolve('./src/data/velogPosts.json')

    fs.mkdirSync(path.resolve('./src/data'), { recursive: true })
    fs.writeFileSync(filePath, JSON.stringify(formatted, null, 2))

    console.log('✅ Velog posts + body saved successfully.')
  } catch (error) {
    console.error('❌ Failed to fetch Velog posts:')
    console.error(error)
  }
}

savePosts()
