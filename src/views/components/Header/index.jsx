import { useState } from 'react'

import { useIcons } from '../../../assets/useIcons'
import { MenuIcon } from '../MenuIcon'
import { Navbar } from '../Navbar'
import { HeaderContainer, LogoContain, RightContainer } from './Header.styled'

const INITIAL = false

const Header = () => {
  const { LogoIcon } = useIcons()
  const [active, setActive] = useState(INITIAL)

  return (
    <HeaderContainer>
      <RightContainer>
        <LogoContain src={LogoIcon} />
        <p>INNOVA CIENCIA Y TECNOLOGIA</p>
      </RightContainer>
      <Navbar active={active} />
      <MenuIcon setActive={setActive} active={active} />
    </HeaderContainer>
  )
}

export { Header }
