import { useNavigate } from 'react-router-dom';
import type { BlogPost } from '@/types/blog';
import * as S from './style';

interface PostListProps {
  post: BlogPost[]
}

const PostList = ({ post }: PostListProps) => {
  const navigate = useNavigate()

  const handleClick = (post: BlogPost) => {
    navigate(`/blog/${post.category}/${post.slug}`)
  }

  return (
    <S.PostListContainer>
      {post.map(post => (
        <S.PostItem key={post.id} onClick={() => handleClick(post)}>
          <S.PostTitle>{post.title}</S.PostTitle>
          <S.PostDescription>{post.description}</S.PostDescription>
          <S.PostDate>{post.date}</S.PostDate>
        </S.PostItem>
      ))}
    </S.PostListContainer>
  )
}
export default PostList;