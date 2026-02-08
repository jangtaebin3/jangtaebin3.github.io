import * as S from './style';

const About = () => {
  return (
    <S.AboutContainer>
      <S.AboutTitle>About me</S.AboutTitle>
      <S.IntroBox>
        <S.IntroText>안녕하세요, 개발자 장태빈입니다.</S.IntroText>
        <S.IntroDetail>기능 구현보다 구조와 흐름을 먼저 고민합니다.</S.IntroDetail>
        <S.IntroDetail>읽기 쉬운 코드와 유지보수가 쉬운 UI를 만드는 것을 중요하게 생각합니다.</S.IntroDetail>
      </S.IntroBox>
    </S.AboutContainer>
  )
}

export default About