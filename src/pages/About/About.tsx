import * as S from './style';
import { motion } from 'framer-motion';
import { titleVariants } from './AboutAnimations';
import Intro from './IntroHero/Intro';
import Experience from './AboutContent/Experience';
import Education from './AboutContent/Education';
import Skills from './AboutContent/Skills';
import Value from './AboutContent/Value';
import Keywords from './AboutContent/Keywords';

const MotionTitle = motion(S.AboutTitle);

const About = () => {
  return (
    <S.AboutContainer>
      <MotionTitle
        variants={titleVariants}
        initial="hidden"
        animate="visible">
          About me
      </MotionTitle>
      <Intro />
      <Experience />
      <Education />
      <Skills />
      <Value />
      <Keywords />
    </S.AboutContainer>
  )
}

export default About