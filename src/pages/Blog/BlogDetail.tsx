import { useParams, useNavigate } from 'react-router-dom'
import * as S from './style'

const BlogDetail = () => {
  const { category, slug } = useParams()
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.Header>
        <S.Category>{category?.toUpperCase()}</S.Category>
        <S.Title>글 제목 자리</S.Title>
        <S.Meta>2026.02.17</S.Meta>
      </S.Header>

      <S.Divider />

      <S.Content>
        <p>여기에 본문이 들어갈 예정입니다.</p>
        <p>Velog API 또는 Markdown 렌더링 예정</p>
      </S.Content>

      <S.Footer>
        <button onClick={() => navigate(-1)}>← Back</button>
      </S.Footer>
    </S.Container>
  )
}

export default BlogDetail
