import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background-color: #010409;
  padding: 32px 0;
  text-align: center;
`

export const IconList = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 12px;
`

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  color: #8B949E;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: #E6EDF3;
    transform: translateY(-2px);
  }
`

export const Copyright = styled.small`
  color: #8B949E;
  font-size: 15px;
  font-weight: 400;
`