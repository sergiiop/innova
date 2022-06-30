import { Lines, MenuContainer } from './MenuIcon.styled'

const MenuIcon = ({ active, handleClick }) => {
  return (
    <MenuContainer className={active ? 'active' : ''} onClick={handleClick}>
      <Lines className={active ? 'active' : ''} first></Lines>
      <Lines className={active ? 'active' : ''} second></Lines>
      <Lines className={active ? 'active' : ''} third></Lines>
    </MenuContainer>
  )
}

export { MenuIcon }
