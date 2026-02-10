import * as S from './style';
import IntroHero from './IntroHero';
import AboutContent from './AboutContent';

const About = () => {
  return (
    <S.AboutContainer>
      <IntroHero />
      <AboutContent />
    </S.AboutContainer>
  )
}

export default About