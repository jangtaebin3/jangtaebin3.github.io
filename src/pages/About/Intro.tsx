import * as S from './style';
import { motion } from 'framer-motion';

const MotionSection = motion(S.Section)
const MotionTitle = motion(S.SectionTitle)
const MotionDetail = motion(S.IntroDetail)

export const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

export const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Intro = () => {
  return (
    <MotionSection
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <MotionTitle variants={item}>
        안녕하세요, 개발자 장태빈입니다.
      </MotionTitle>

      <MotionDetail variants={item}>
        기능 구현보다 구조와 흐름을 먼저 고민합니다.
      </MotionDetail>

      <MotionDetail variants={item}>
        읽기 쉬운 코드와 유지보수가 쉬운 UI를 만드는 것을 중요하게 생각합니다.
      </MotionDetail>
    </MotionSection>
  )
}

export default Intro;