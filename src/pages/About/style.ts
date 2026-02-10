import styled from 'styled-components';

export const AboutContainer = styled.div`
  background-color: #F8FBF4;
`;

export const IntroHeroContainer = styled.div`
  padding: 64px 120px 0;
  height: 100vh;
`;

export const AboutContentContainer = styled.div`
  padding: 0 120px 64px;
`;

export const AboutTitle = styled.p`
  color: #000;  
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 80px;
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
  margin-bottom: 24px;
`;

export const IntroDetail = styled.p`
  color: #70716E;
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