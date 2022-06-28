import { NavbarContainer, NavbarContentContainer } from './Navbar.styled'

const Navbar = ({ active }) => {
  return (
    <NavbarContainer className={active ? 'active' : ''}>
      <NavbarContentContainer>
        <li>
          <a href=''>Nosotros</a>
        </li>
        <li>
          <a href=''>Nuestros Servicios</a>
        </li>
        <li>
          <a href=''>Contactanos</a>
        </li>
      </NavbarContentContainer>
    </NavbarContainer>
  )
}

export { Navbar }
