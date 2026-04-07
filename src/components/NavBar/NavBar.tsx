import { NavWrapper, Title, NavItems, NavItem } from './style'
import { useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <NavWrapper>
      <Title to="/" $isHome={isHome}>Jang Taebin</Title>
      <NavItems>
        <NavItem to="/" end $isHome={isHome}>Home</NavItem>
        <NavItem to="/about" $isHome={isHome}>About</NavItem>
        <NavItem to="/projects" $isHome={isHome}>Projects</NavItem>
        <NavItem to="/blog" $isHome={isHome}>Blog</NavItem>
      </NavItems>
    </NavWrapper>
  )
}

export default NavBar
