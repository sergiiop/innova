import { TitleComponent } from '../TitleComponent'
import {
  ContentContainer,
  FirstContainer,
  InformationContainer,
  SecondContainer
} from './ContactInformation.styled'

export const ContactInformation = () => {
  return (
    <InformationContainer className='container'>
      <TitleComponent>Informacion de Contacto</TitleComponent>
      <ContentContainer>
        <FirstContainer>
          <h1>INNOVA CIENCIA Y TECNOLOGIA</h1>
          <p>
            Sede Principal. <br /> CR 5S 83 40 LC 11 <br /> Urb. LA FLORIDA 3{' '}
            <br />
            Ibague-Tolima-Colombia.
          </p>
        </FirstContainer>
        <SecondContainer>
          <span>Teléfono: -----------</span>
          <span>
            Móvil y Whatsapp: <br />
            (+57) 3215860758
          </span>
          <span>E-mail: innovacienciaytecnologia@gmail.com</span>
        </SecondContainer>
      </ContentContainer>
    </InformationContainer>
  )
}
