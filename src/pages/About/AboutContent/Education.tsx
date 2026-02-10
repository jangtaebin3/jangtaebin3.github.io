import * as S from '../style';
import AnimatedSection from '../AnimatedSection';

const Education = () => {
  return (
    <AnimatedSection>
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
    </AnimatedSection>
  )
}

export default Education;