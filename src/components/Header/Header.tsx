import styled from "styled-components"

const Header = () => {
  const HeaderWrapper = styled.header`
    height: auto;
    position: sticky;
    top: 0;
    
    padding: 32px 64px 24px;
  `

  return <HeaderWrapper>Header</HeaderWrapper>
}

export default Header