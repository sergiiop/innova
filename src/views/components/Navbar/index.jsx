import { NavbarContainer, NavbarContentContainer } from './Navbar.styled'

const Navbar = ({ active, handleClick }) => {
  return (
    <NavbarContainer className={active ? 'active' : ''}>
      <NavbarContentContainer>
        <li>
          <a onClick={handleClick} href='#nosotros'>
            Nosotros
          </a>
        </li>
        <li>
          <a onClick={handleClick} href='#services'>
            Nuestros Servicios
          </a>
        </li>
        <li>
          <a onClick={handleClick} href='#contacto'>
            Contactanos
          </a>
        </li>
      </NavbarContentContainer>
    </NavbarContainer>
  )
}

export { Navbar }
