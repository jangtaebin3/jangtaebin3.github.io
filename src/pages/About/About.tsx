import * as S from './style';
import IntroHero from './IntroHero';
import Experience from './AboutContent/Experience';
import Education from './AboutContent/Education';
import Skills from './AboutContent/Skills';
import Value from './AboutContent/Value';
import Keywords from './AboutContent/Keywords';

const About = () => {
  return (
    <S.AboutContainer>
      <IntroHero />
      <Experience />
      <Education />
      <Skills />
      <Value />
      <Keywords />
    </S.AboutContainer>
  )
}

export default About