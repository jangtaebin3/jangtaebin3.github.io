import { useState, useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const HEADER_HEIGHT = 72

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.main`
  background: #F8FBF4;
  flex: 1;
  padding-top: ${HEADER_HEIGHT}px;
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
`

const Layout = () => {
  const [isHidden, setIsHidden] = useState(() => {
    const saved = localStorage.getItem('header-hidden')
    return saved === 'true'
  })

  const lastScrollY = useRef(0)
  const hasScrolled = useRef(false)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (!hasScrolled.current) {
        hasScrolled.current = true
        lastScrollY.current = currentScrollY
        return
      }

      if (currentScrollY > lastScrollY.current) {
        setIsHidden(true)
        localStorage.setItem('header-hidden', 'true')
      } else if (currentScrollY < lastScrollY.current) {
        setIsHidden(false)
        localStorage.setItem('header-hidden', 'false')
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <LayoutWrapper>
      <Header isHidden={isHidden} />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout
