import { NavWrapper, NavItem } from './style'

const NavBar = () => {
  return (
    <NavWrapper>
      <NavItem to="/" end>Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/projects">Projects</NavItem>
    </NavWrapper>
  )
}

export default NavBar
