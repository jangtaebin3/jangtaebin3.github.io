import { useState } from 'react'
import { NavWrapper, Title, NavItems, NavItem, TitleChar } from './style'
import { useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()
  const isAbout = location.pathname === '/about'
  const titleText = "Jang Taebin"

  const [originIndex, setOriginIndex] = useState<number | null>(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = (index: number) => {
    if (!isHovering) {
      setOriginIndex(index)
      setIsHovering(true)
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setOriginIndex(null)
  }

  return (
    <NavWrapper>
      <Title
        to="/"
        $isAbout={isAbout}
        onMouseLeave={handleMouseLeave}
      >
        {titleText.split('').map((char, index) => {
          const delay = originIndex !== null ? Math.abs(index - originIndex) * 0.05 : 0

          return (
            <TitleChar
              key={index}
              $delay={delay}
              $isAnimating={isHovering}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              {char === ' ' ? '\u00A0' : char}
            </TitleChar>
          )
        })}
      </Title>
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
