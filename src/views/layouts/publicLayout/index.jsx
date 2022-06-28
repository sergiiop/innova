import { useComponents } from '../../components'
import { MainContainer } from './publicLayout.styled'

const PublicLayout = ({ children }) => {
  const { Header } = useComponents()
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  )
}

export { PublicLayout }
