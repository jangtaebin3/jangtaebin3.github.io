import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 24px;
  font-weight: 600;
`

export const NavItems = styled.div`
  display: flex;
  gap: 32px;
`

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 24px;
  font-weight: 500;

  &.active {
    color: #000;
    font-weight: 700;
  }
`
