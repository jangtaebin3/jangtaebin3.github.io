import { NavWrapper, Title, NavItems, NavItem } from './style'

const NavBar = () => {
  return (
    <NavWrapper>
      <Title to="/">Jang Taebin</Title>
      <NavItems>
        <NavItem to="/" end>Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/projects">Projects</NavItem>
      </NavItems>
    </NavWrapper>
  )
}

export default NavBar
