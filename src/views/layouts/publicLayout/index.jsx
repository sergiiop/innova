import { useComponents } from '../../components'
import { MainContainer } from './publicLayout.styled'

const PublicLayout = ({ children }) => {
  const { Header, Footer } = useComponents()
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  )
}

export { PublicLayout }
