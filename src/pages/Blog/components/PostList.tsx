import { useNavigate } from 'react-router-dom';
import type { BlogPost } from '@/types/blog';
import * as S from './style';

interface PostListProps {
  post: BlogPost[]
}

const normalizeDescription = (text: string) =>
  text
    .replace(/\s*\n+\s*/g, ' ')
    .replace(/([.!?…])(?=[^\s])/g, '$1 ')
    .replace(/([가-힣])([A-Za-z0-9])/g, '$1 $2')
    .replace(/([A-Za-z0-9])([가-힣])/g, '$1 $2')
    .replace(/\s{2,}/g, ' ')
    .trim()

const formatPostDate = (value: string) => {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) return value

  const parts = new Intl.DateTimeFormat('ko-KR', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(date)

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find(part => part.type === type)?.value ?? ''

  return `${get('year')}.${get('month')}.${get('day')}`
}

const PostList = ({ post }: PostListProps) => {
  const navigate = useNavigate()

  const handleClick = (post: BlogPost) => {
    navigate(`/blog/${post.category}/${post.slug}`)
  }

  return (
    <S.PostListContainer>
    {post.length === 0 ? (
      <S.EmptyMessage>아직 작성된 글이 없습니다.</S.EmptyMessage>
    ) : (
      post.map(post => (
        <S.PostItem key={post.id} onClick={() => handleClick(post)}>
          <S.PostTitle>{post.title}</S.PostTitle>
          <S.PostDescription>{normalizeDescription(post.description)}</S.PostDescription>
          <S.PostDate>{post.date}</S.PostDate>
        </S.PostItem>
      ))
    )}
  </S.PostListContainer>
  )
}
export default PostList;