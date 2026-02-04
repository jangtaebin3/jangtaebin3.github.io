import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavWrapper = styled.nav`
  display: flex;
  gap: 24px;
`

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: 500;

  &.active {
    color: #000;
    font-weight: 700;
  }
`
