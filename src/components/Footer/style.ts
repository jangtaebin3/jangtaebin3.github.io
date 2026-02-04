import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  padding: 32px 0;
  text-align: center;
`

export const IconList = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 12px;
`

export const IconLink = styled.a`
  color: #555;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: #000;
    transform: translateY(-2px);
  }
`
