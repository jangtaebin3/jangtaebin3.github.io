import * as S from './style';

const About = () => {
  return (
    <S.AboutContainer>
      <S.AboutTitle>About me</S.AboutTitle>
      <S.Section>
        <S.SectionTitle>안녕하세요, 개발자 장태빈입니다.</S.SectionTitle>
        <S.IntroDetail>기능 구현보다 구조와 흐름을 먼저 고민합니다.</S.IntroDetail>
        <S.IntroDetail>읽기 쉬운 코드와 유지보수가 쉬운 UI를 만드는 것을 중요하게 생각합니다.</S.IntroDetail>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Experience</S.SectionTitle>
        <S.ExperienceList>
          <S.ExperienceItem>
            <S.ExperiencePeriod>2026.01 -</S.ExperiencePeriod>
            <S.ExperienceTitle>개인 포트폴리오 웹사이트 개발</S.ExperienceTitle>
            <S.ExperienceDetail>- Vite + React + TypeScript 기반</S.ExperienceDetail>
            <S.ExperienceDetail>- Github Pages 배포</S.ExperienceDetail>
          </S.ExperienceItem>
          <S.ExperienceItem>
            <S.ExperiencePeriod>2025.08 – 2025.09</S.ExperiencePeriod>
            <S.ExperienceTitle>media-kiosk 웹 서비스 프로젝트 PM</S.ExperienceTitle>
          </S.ExperienceItem>
          <S.ExperienceItem>
            <S.ExperiencePeriod>2026.02 –</S.ExperiencePeriod>
            <S.ExperienceTitle>SSU DIP Lab 학부연구생</S.ExperienceTitle>
          </S.ExperienceItem>
          <S.ExperienceItem>
            <S.ExperiencePeriod>2024.12 – 2025.11</S.ExperiencePeriod>
            <S.ExperienceTitle>제22대 글로벌미디어학부 부학생회장</S.ExperienceTitle>
          </S.ExperienceItem>
        </S.ExperienceList>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Education</S.SectionTitle>
        <S.EduList>
          <S.EduItem>
            <S.EduPeriod>2024.03 -</S.EduPeriod>
            <S.EduTitle>숭실대학교 글로벌미디어학부</S.EduTitle>
          </S.EduItem>
          <S.EduItem>
            <S.EduPeriod>2024</S.EduPeriod>
            <S.EduTitle>대광고등학교 졸업</S.EduTitle>
          </S.EduItem>
          <S.EduItem/>
          <S.EduItem/>
        </S.EduList>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Skills</S.SectionTitle>
      </S.Section>
    </S.AboutContainer>
  )
}

export default About