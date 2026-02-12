import type { BlogPost } from '@/types/blog';

interface PostListProps {
  posts: BlogPost[]
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '32px' }}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <span>{post.date}</span>
        </div>
      ))}
    </div>
  )
}
export default PostList;