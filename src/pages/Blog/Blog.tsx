import { BlogContainer } from './style'
import BlogHeader from './BlogHeader'
import { useMemo, useState } from 'react'
import TabMenu from './components/TabMenu'
import PostList from './components/PostList'
import velogPosts from '@/data/velogPosts.json'
import type { BlogCategory, BlogPost } from '@/types/blog'

const Blog = () => {
  const [activeTab, setActiveTab] = useState<BlogCategory>('all')
  const posts = velogPosts as BlogPost[]

  const filteredPosts = useMemo(() => {
    if (activeTab === 'all') return posts

    return posts.filter(post => post.category === activeTab)
  }, [activeTab, posts])

  return (
    <div>
      <BlogHeader />
      <BlogContainer>
        <TabMenu activeTab={activeTab} onChange={setActiveTab} />
        <PostList post={filteredPosts} />
      </BlogContainer>
    </div>
  )
}

export default Blog
