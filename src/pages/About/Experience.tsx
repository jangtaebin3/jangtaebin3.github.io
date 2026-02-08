import * as S from './style';
import AnimatedSection from './AnimatedSection';

const Experience = () => {
  return (
    <AnimatedSection>
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
    </AnimatedSection>
  )
}

export default Experience;