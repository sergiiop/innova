import { TitleComponent } from '../TitleComponent'
import {
  Container,
  ObjetivesContainer,
  Paragraph
} from './ObjetivesComponent.styled'

const ObjetivesData = [
  {
    title: 'Mision',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae at non pretium vitae tristique egestas. Pharetra, mattis purus, sit nunc, tellus vitae magna. Vitae adipiscing cursus amet, risus. Ut et aliquam lectus ut arcu, ac ac. '
  },
  {
    title: 'Vision',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae at non pretium vitae tristique egestas. Pharetra, mattis purus, sit nunc, tellus vitae magna. Vitae adipiscing cursus amet, risus. Ut et aliquam lectus ut arcu, ac ac. '
  }
]

const ObjetivesComponent = () => {
  return (
    <ObjetivesContainer className='container'>
      {ObjetivesData.map((objetive, index) => {
        return (
          <Container key={index}>
            <TitleComponent>{objetive.title}</TitleComponent>
            <Paragraph>{objetive.paragraph}</Paragraph>
          </Container>
        )
      })}
    </ObjetivesContainer>
  )
}

export { ObjetivesComponent }
