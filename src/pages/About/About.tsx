import * as S from './style';
import { motion } from 'framer-motion';
import Intro from './Intro';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Value from './Value';
import Keywords from './Keywords';

const MotionTitle = motion(S.AboutTitle);

export const titleVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
}

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