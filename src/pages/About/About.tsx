import * as S from './style';
import Intro from './Intro';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Value from './Value';

const About = () => {
  return (
    <S.AboutContainer>
      <S.AboutTitle>About me</S.AboutTitle>
      <Intro />
      <Experience />
      <Education />
      <Skills />
      <Value />
    </S.AboutContainer>
  )
}

export default About