import { useState, useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const HEADER_HEIGHT = 96

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.main`
  flex: 1;
  padding-top: ${HEADER_HEIGHT}px;
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
`

const Layout = () => {
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY.current) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
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
