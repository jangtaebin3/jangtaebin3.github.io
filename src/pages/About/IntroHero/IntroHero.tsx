import * as S from '../style';
import { motion } from 'framer-motion';
import { titleVariants } from '../AboutAnimations';
import Intro from './Intro';

const MotionTitle = motion(S.AboutTitle);

const IntroHero = () => {
  return (
    <div>
      <MotionTitle
        variants={titleVariants}
        initial="hidden"
        animate="visible">
          About me
      </MotionTitle>
      <Intro />
    </div>
  )
}

export default IntroHero;