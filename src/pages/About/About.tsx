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
        <S.SkillsList>
          <S.SkillsItem>
            <S.SkillName>Frontend Development</S.SkillName>
            <S.SkillDetail>• Component-based UI development with React</S.SkillDetail>
            <S.SkillDetail>• Type-safe component design using TypeScript</S.SkillDetail>
            <S.SkillDetail>• Responsive layout with CSS Grid / Flexbox</S.SkillDetail>
          </S.SkillsItem>
          <S.SkillsItem>
            <S.SkillName>Web & Deployment</S.SkillName>
            <S.SkillDetail>• Version control and collaboration using Git / GitHub</S.SkillDetail>
            <S.SkillDetail>• Static site deployment with GitHub Pages</S.SkillDetail>
          </S.SkillsItem>
          <S.SkillsItem>
            <S.SkillName>Project & Collaboration</S.SkillName>
            <S.SkillDetail>• Project planning and task organization</S.SkillDetail>
            <S.SkillDetail>• Requirement documentation and progress tracking</S.SkillDetail>
          </S.SkillsItem>
          <S.SkillsItem>
            <S.SkillName>Research & Problem Solving</S.SkillName>
            <S.SkillDetail>• Academic research participation</S.SkillDetail>
            <S.SkillDetail>• Problem definition and analytical thinking</S.SkillDetail>
            <S.SkillDetail>• Learning through documentation and papers</S.SkillDetail>
          </S.SkillsItem>
        </S.SkillsList>
      </S.Section>
      <S.Section>
        <S.SectionTitle>What I Value</S.SectionTitle>
        <S.ValueContent>
          저는 기능 구현보다 <strong>구조와 흐름을 먼저 고민하는 개발자</strong>입니다. <br />
          무엇을 만들 것인지보다, 왜 필요한지를 이해하는 것이 중요하다고 생각합니다.<br />
          <br />
          읽기 쉬운 코드와 유지보수가 쉬운 UI를 만드는 것을 목표로 하며,<br />
          혼자만 이해하는 코드보다 <strong>함께 작업할 수 있는 구조</strong>를 지향합니다.<br />
          <br />
          또한 새로운 도메인에 대해 문서와 자료를 기반으로 학습하며,<br />
          문제를 정의하고 해결해 나가는 과정을 중요하게 생각합니다.
        </S.ValueContent>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Keywords</S.SectionTitle>
        <S.ValueContent>
          Problem-first Thinking · Structured Communication · Frontend Development ·<br />
          Academic Research · Project Management · Learning-oriented
        </S.ValueContent>
      </S.Section>
    </S.AboutContainer>
  )
}

export default About