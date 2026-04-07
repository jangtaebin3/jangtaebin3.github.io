import { NavWrapper, Title, NavItems, NavItem } from './style'
import { useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isBlog = location.pathname === '/blog'
  const isWhiteBg = isHome || isBlog

  return (
    <NavWrapper>
      <Title to="/" $isWhiteBg={isWhiteBg}>Jang Taebin</Title>
      <NavItems>
        <NavItem to="/" end $isWhiteBg={isWhiteBg}>Home</NavItem>
        <NavItem to="/about" $isWhiteBg={isWhiteBg}>About</NavItem>
        <NavItem to="/projects" $isWhiteBg={isWhiteBg}>Projects</NavItem>
        <NavItem to="/blog" $isWhiteBg={isWhiteBg}>Blog</NavItem>
      </NavItems>
    </NavWrapper>
  )
}

export default NavBar
