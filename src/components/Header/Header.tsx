import { HeaderWrapper, Nav } from './style'

interface HeaderProps {
  isHidden: boolean
}

const Header = ({ isHidden }: HeaderProps) => {
  return (
    <HeaderWrapper $hidden={isHidden}>
      <Nav>
        <span>Home</span>
        <span>About</span>
        <span>Projects</span>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header
