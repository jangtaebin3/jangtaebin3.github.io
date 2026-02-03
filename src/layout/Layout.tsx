import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
`

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout
