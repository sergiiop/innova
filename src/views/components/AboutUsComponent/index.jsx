import { AboutUsContainer, AboutUsImg } from './AboutUsComponent.styled'
import { useImages } from '../../../assets/useImages'
import { TitleComponent } from '../TitleComponent'

const AboutUsComponent = () => {
  const { AboutUs } = useImages()
  return (
    <AboutUsContainer className='container'>
      <TitleComponent>INNOVA CIENCIA Y TECNOLOGIA</TitleComponent>
      <AboutUsImg src={AboutUs} />
      <p>
      Esta empresa fué constituida como SOCIEDAD POR ACCIONES SIMPLIFICADA y se dedica a Investigaciones y desarrollo experimental en el campo de las ciencias sociales y las humanidades.
      </p>
    </AboutUsContainer>
  )
}

export { AboutUsComponent }
