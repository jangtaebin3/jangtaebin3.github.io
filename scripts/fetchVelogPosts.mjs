import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'

const VELOG_USERNAME = 'taebin0416'

const fetchPosts = async () => {
  const response = await fetch('https://v2.velog.io/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
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
      variables: {
        username: VELOG_USERNAME
      }
    })
  })

  const json = await response.json()

  if (!json.data || !json.data.posts) {
    console.error('GraphQL Error:', json)
    throw new Error('No data returned from Velog API')
  }

  return json.data.posts
}

const savePosts = async () => {
  try {
    const posts = await fetchPosts()

    const formatted = posts.map(post => ({
      id: post.id,
      title: post.title,
      slug: post.url_slug,
      date: post.released_at,
      description: post.short_description,
      thumbnail: post.thumbnail,
      category: 'dev'
    }))

    const filePath = path.resolve('./src/data/velogPosts.json')

    fs.mkdirSync(path.resolve('./src/data'), { recursive: true })

    fs.writeFileSync(filePath, JSON.stringify(formatted, null, 2))

    console.log('✅ Velog posts saved successfully.')
  } catch (error) {
    console.error('❌ Failed to fetch Velog posts:')
    console.error(error)
  }
}

savePosts()
