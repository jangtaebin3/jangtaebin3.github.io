import { HeaderWrapper } from './style'
import NavBar from '@/components/NavBar'

interface HeaderProps {
  isHidden: boolean
}

const Header = ({ isHidden }: HeaderProps) => {
  return (
    <HeaderWrapper $hidden={isHidden}>
      <NavBar />
    </HeaderWrapper>
  )
}

export default Header
