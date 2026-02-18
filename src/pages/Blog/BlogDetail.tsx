import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as S from './style'
import velogPosts from '@/data/velogPosts.json'
import type { BlogPost, BlogCategory } from '@/types/blog'

const formatDate = (value: string) => {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) return value

  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date)
}

const BlogDetail = () => {
  const { category, slug } = useParams()
  const navigate = useNavigate()
  const posts = velogPosts as BlogPost[]

  const post = useMemo(
    () => posts.find(item => item.slug === slug && item.category === category),
    [category, posts, slug]
  )

  if (!post) {
    return (
      <S.Container>
        <S.Header>
          <S.Title>게시글을 찾을 수 없습니다.</S.Title>
          <S.Meta>요청한 글이 삭제되었거나 주소가 변경되었어요.</S.Meta>
        </S.Header>
        <S.Footer>
          <button onClick={() => navigate('/blog')}>← Blog로 돌아가기</button>
        </S.Footer>
      </S.Container>
    )
  }

  return (
    <S.Container>
      <S.Header>
        <S.Category>{(category as BlogCategory)?.toUpperCase()}</S.Category>
        <S.Title>{post.title}</S.Title>
        <S.Meta>{formatDate(post.date)}</S.Meta>
      </S.Header>

      <S.Divider />

      <S.Content>
        {post.body ? (
          post.body.split('\n').map((line, index) => <p key={`${post.id}-${index}`}>{line || '\u00a0'}</p>)
        ) : (
          <p>{post.description}</p>
        )}
      </S.Content>

      <S.Footer>
        <button onClick={() => navigate(-1)}>← Back</button>
      </S.Footer>
    </S.Container>
  )
}

export default BlogDetail
