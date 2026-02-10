import * as S from '../style';
import { motion } from 'framer-motion';
import { titleVariants } from '../AboutAnimations';
import Intro from './Intro';

const MotionTitle = motion(S.AboutTitle);

const IntroHero = () => {
  return (
    <S.IntroHeroContainer>
      <MotionTitle
        variants={titleVariants}
        initial="hidden"
        animate="visible">
          ABOUT ME
      </MotionTitle>
      <Intro />
    </S.IntroHeroContainer>
  )
}

export default IntroHero;