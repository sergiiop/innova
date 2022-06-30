import { useState } from 'react'

import { useIcons } from '../../../assets/useIcons'
import { MenuIcon } from '../MenuIcon'
import { Navbar } from '../Navbar'
import {
  HeaderContainer,
  LogoContain,
  RightContainer,
  Span
} from './Header.styled'

const INITIAL = false

const Header = () => {
  const { LogoIcon } = useIcons()
  const [active, setActive] = useState(INITIAL)

  const handleClick = () => {
    setActive(!active)
  }
  return (
    <HeaderContainer>
      <RightContainer>
        <LogoContain src={LogoIcon} />
        <Span>INNOVA CIENCIA Y TECNOLOGIA</Span>
      </RightContainer>
      <Navbar active={active} handleClick={handleClick} />
      <MenuIcon handleClick={handleClick} active={active} />
    </HeaderContainer>
  )
}

export { Header }
