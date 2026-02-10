import styled from 'styled-components';

export const AboutContainer = styled.div`
  background-color: #F8FBF4;
`;

export const IntroHeroContainer = styled.div`
  padding: 64px 120px 0;
  height: calc(100vh - 128px);
  background: linear-gradient(180deg, #fff 0%, #aaa 75%, #555 100%);
`;

export const AboutContentContainer = styled.div`
  padding: 64px 120px;
`;

export const AboutTitle = styled.p`
  position: absolute;
  inset: 0 0 45% 0;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Anton', Impact, sans-serif;
  font-size: clamp(120px, 20vw, 320px);
  font-weight: 800;

  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.35),
    rgba(0,0,0,0.05)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
`;

export const SectionTitle = styled.p`
  color: #000;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 36px;
`;

export const IntroDetail = styled.p`
  color: #3a3a3a;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const ExperienceList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px 16px;
  margin: 0;
  padding-left: 0;
  list-style: none;
`;

export const ExperienceItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ExperiencePeriod = styled.span`
  font-weight: 700;
`;

export const ExperienceTitle = styled.span`
  font-weight: 500;
  color: #333;
`;

export const ExperienceDetail = styled.span`
  font-weight: 500;
  color: #70716E;
`;

export const EduList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0 16px;
  grid-auto-flow: row dense;
  align-items: start;
  margin: 0;
  padding-left: 0;
  list-style: none;
`;

export const EduItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const EduPeriod = styled.span`
  font-weight: 700;
`;

export const EduTitle = styled.span`
  font-weight: 600;
  color: #333;
  margin-bottom: 24px;
`;

export const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(425px, 1fr));
  gap: 24px 16px;
  margin: 0;
  padding-left: 0;
  list-style: none;

  @media (max-width: 1136px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SkillName = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export const SkillDetail = styled.span`
  font-weight: 400;
  color: #333;
`;

export const ValueContent = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: #222;
`;