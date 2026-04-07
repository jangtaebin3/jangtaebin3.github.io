import { NavWrapper, Title, NavItems, NavItem } from './style'
import { useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()
  const isAbout = location.pathname === '/about'

  return (
    <NavWrapper>
      <Title to="/" $isAbout={isAbout}>Jang Taebin</Title>
      <NavItems>
        <NavItem to="/" end $isAbout={isAbout}>Home</NavItem>
        <NavItem to="/about" $isAbout={isAbout}>About</NavItem>
        <NavItem to="/projects" $isAbout={isAbout}>Projects</NavItem>
        <NavItem to="/blog" $isAbout={isAbout}>Blog</NavItem>
      </NavItems>
    </NavWrapper>
  )
}

export default NavBar
