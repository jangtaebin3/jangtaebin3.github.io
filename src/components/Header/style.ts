import styled from 'styled-components'

export const HeaderWrapper = styled.header<{ $hidden: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 24px;
  padding: 24px 64px 16px;
  background: #fff;
  z-index: 1000;

  display: flex;
  align-items: center;

  transform: ${({ $hidden }) =>
    $hidden ? 'translateY(-100%)' : 'translateY(0)'};

  transition: transform 0.5s ease;
`
