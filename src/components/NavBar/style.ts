import styled, { keyframes } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled(NavLink) <{ $isAbout?: boolean }>`
  font-family: 'IBM Plex Mono', monospace, sans-serif;
  text-decoration: none;
  color: ${({ $isAbout }) => ($isAbout ? '#333' : '#fff')};
  font-size: 16px;
  font-weight: 600;
  transition: color 0.5s ease;
  display: flex;
`

const waveAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
`

export const TitleChar = styled.span<{ $delay: number; $isAnimating: boolean }>`
  display: inline-block;
  animation: ${({ $isAnimating }) => ($isAnimating ? waveAnimation : 'none')} 0.3s ease-in-out;
  animation-delay: ${({ $delay }) => $delay}s;
`

export const NavItems = styled.div`
  display: flex;
  gap: 32px;
`

export const NavItem = styled(NavLink) <{ $isAbout?: boolean }>`
  font-family: 'IBM Plex Mono', monospace, sans-serif;
  position: relative;
  padding: 4px 0;

  text-decoration: none;
  color: ${({ $isAbout }) => ($isAbout ? '#666' : 'rgba(255, 255, 255, 0.7)')};
  font-size: 16px;
  font-weight: 500;

  transition: color 0.5s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;

    width: 100%;
    height: 2px;
    background-color: ${({ $isAbout }) => ($isAbout ? '#000' : '#fff')};

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease, background-color 0.5s ease;
  }

  &:hover {
    color: ${({ $isAbout }) => ($isAbout ? '#000' : '#fff')};
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &.active {
    color: ${({ $isAbout }) => ($isAbout ? '#000' : '#fff')};
    font-weight: 700;
  }

  &.active::after {
    transform: scaleX(1);
  }
`