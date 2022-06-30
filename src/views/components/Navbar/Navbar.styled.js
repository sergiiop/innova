import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  height: 100vh;
  width: 100%;
  top: -100vh;
  background: #5d7aab;
  position: fixed;
  transition: all 0.5s;
  z-index: 5;
  &.active {
    top: 0;
  }
  @media screen and (min-width: 600px) {
    position: static;
    background: transparent;
    height: fit-content;
    width: fit-content;
    padding-right: 4rem;
  }
`

export const NavbarContentContainer = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 40px;
  top: 95px;
  left: 50px;
  color: #053396;
  font-size: 1.6rem;
  line-height: 19px;
  font-weight: 400;
  @media screen and (min-width: 600px) {
    position: static;
    flex-direction: row;
  }
`
