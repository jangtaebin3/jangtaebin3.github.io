import * as S from '../style';
import AnimatedSection from '../AnimatedSection';

const Skills = () => {
  return (
    <AnimatedSection>
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
    </AnimatedSection>
  )
}

export default Skills;