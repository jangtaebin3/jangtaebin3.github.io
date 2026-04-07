import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  /* To allow enough scrolling distance to test parallax */
  min-height: 200vh; 
  background-color: #000;
  color: #fff;
`;

export const HeroSection = styled.section<{ $bgImage: string }>`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Core for Parallax effect */
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 1;
`;

export const ContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
  line-height: 1.1;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
`;

export const SubTitle = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
  margin-bottom: 40px;
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-7px);
  }
`;

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  
  svg {
    margin-top: 10px;
    font-size: 2rem;
    animation: ${bounce} 2s infinite;
  }
`;

export const DummySection = styled.section`
  min-height: 100vh;
  padding: 100px 20px;
  background-color: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #fff;
  }

  p {
    font-size: 1.2rem;
    color: #aaa;
    max-width: 600px;
    line-height: 1.6;
    word-break: keep-all;
  }
`;