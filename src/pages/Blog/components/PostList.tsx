import type { BlogPost } from '@/types/blog';
import * as S from './style';

interface PostListProps {
  posts: BlogPost[]
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <S.PostListContainer>
      {posts.map(post => (
        <S.PostItem key={post.id}>
          <S.PostTitle>{post.title}</S.PostTitle>
          <S.PostDescription>{post.description}</S.PostDescription>
          <S.PostDate>{post.date}</S.PostDate>
        </S.PostItem>
      ))}
    </S.PostListContainer>
  )
}
export default PostList;