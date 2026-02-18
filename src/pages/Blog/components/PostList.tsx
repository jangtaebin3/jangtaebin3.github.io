import { useNavigate } from 'react-router-dom';
import type { BlogPost } from '@/types/blog';
import * as S from './style';

interface PostListProps {
  post: BlogPost[]
}

const normalizeDescription = (text: string) => text.replace(/\s*\n+\s*/g, ' ').trim()

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
          <S.PostDescription>{normalizeDescription(post.description)}</S.PostDescription>
          <S.PostDate>{post.date}</S.PostDate>
        </S.PostItem>
      ))}
    </S.PostListContainer>
  )
}
export default PostList;