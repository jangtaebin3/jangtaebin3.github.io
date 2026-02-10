import styled from 'styled-components';
import blogWallpaper from '@/assets/images/seahawks.jpg'

export const BlogHeader = styled.header`
  position: relative;
  height: 280px;
  overflow: hidden;
`;

export const Background = styled.div`
  position: absolute;
  inset: 0;

  background-image: url('${blogWallpaper}');
  background-size: cover;
  background-position: center;

  filter: blur(1px);
  transform: scale(1.1);
  opacity: 0.6;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.75)
    );
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;

  max-width: 720px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 20px;
  color: #e2e2e2;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 42px;
  font-weight: 600;
`;

export const Description = styled.p`
  margin-top: 36px;
  font-size: 16px;
  font-weight: 400;
`;