import { BlogContainer } from './style'
import BlogHeader from './BlogHeader'
import { useMemo, useState } from 'react'
import TabMenu from './components/TabMenu'
import PostList from './components/PostList'
import { blogPosts } from '@/data/blogPosts'
import type { BlogCategory } from '@/types/blog'

const Blog = () => {
  const [activeTab, setActiveTab] = useState<BlogCategory>('all')

  const filteredPosts = useMemo(() => {
  const targetPosts = activeTab === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeTab)

  return [...targetPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}, [activeTab, blogPosts])

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
