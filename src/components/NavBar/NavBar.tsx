import { useState } from 'react'
import { NavWrapper, Title, NavItems, NavItem, TitleChar } from './style'

const NavBar = () => {
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
        <NavItem to="/" end>Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/blog">Blog</NavItem>
      </NavItems>
    </NavWrapper>
  )
}

export default NavBar
