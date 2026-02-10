import * as S from './style';

const Blog = () => {
  return (
    <S.BlogHeader>
      <S.Background />
      <S.Content>
        <S.Title>Blog</S.Title>
        <S.Description>
          생각을 정리하고, 선택의 이유를 기록합니다.
        </S.Description>
      </S.Content>
    </S.BlogHeader>
  );
}

export default Blog;