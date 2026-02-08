import * as S from './style';
import { motion } from 'framer-motion';
import { titleVariants } from './AboutAnimations';
import Intro from './Intro';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Value from './Value';
import Keywords from './Keywords';

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