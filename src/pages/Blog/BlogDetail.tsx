import type { ReactNode } from 'react'
import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as S from './style'
import velogPosts from '@/data/velogPosts.json'
import type { BlogPost, BlogCategory } from '@/types/blog'

const imagePattern = /^!\[(.*?)\]\((https?:\/\/[^\s)]+)\)$/
const headingPattern = /^(#{1,6})\s+(.*)$/
const boldPattern = /(\*\*.*?\*\*)/g

const formatDate = (value: string) => {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) return value

  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date)
}

const renderInline = (text: string): ReactNode[] =>
  text.split(boldPattern).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`bold-${index}`}>{part.slice(2, -2)}</strong>
    }

    return <span key={`text-${index}`}>{part}</span>
  })

const renderMarkdownLine = (line: string, key: string) => {
  const trimmedLine = line.trim()

  if (!trimmedLine) return <br key={key} />

  const imageMatch = trimmedLine.match(imagePattern)
  if (imageMatch) {
    const [, alt, src] = imageMatch
    return <img key={key} src={src} alt={alt || 'blog image'} loading="lazy" />
  }

  const headingMatch = trimmedLine.match(headingPattern)
  if (headingMatch) {
    const [, hashes, content] = headingMatch
    const level = hashes.length

    switch (level) {
      case 1:
        return <h1 key={key}>{renderInline(content)}</h1>
      case 2:
        return <h2 key={key}>{renderInline(content)}</h2>
      case 3:
        return <h3 key={key}>{renderInline(content)}</h3>
      case 4:
        return <h4 key={key}>{renderInline(content)}</h4>
      case 5:
        return <h5 key={key}>{renderInline(content)}</h5>
      default:
        return <h6 key={key}>{renderInline(content)}</h6>
    }
  }

  return <p key={key}>{renderInline(trimmedLine)}</p>
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
        {post.body
          ? post.body.split('\n').map((line, index) => renderMarkdownLine(line, `${post.id}-${index}`))
          : <p>{post.description}</p>}
      </S.Content>

      <S.Footer>
        <button onClick={() => navigate(-1)}>← Back</button>
      </S.Footer>
    </S.Container>
  )
}

export default BlogDetail
