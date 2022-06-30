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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae at non
        pretium vitae tristique egestas. Pharetra, mattis purus, sit nunc,
        tellus vitae magna. Vitae adipiscing cursus amet, risus. Ut et aliquam
        lectus ut arcu, ac ac. Consequat, maecenas consequat, amet, amet, dictum
        id. Sollicitudin dictum libero turpis eget at. Tincidunt ut ac a euismod
        velit dolor sit. Leo luctus amet pellentesque vitae dignissim proin
        faucibus sed. Gravida posuere arcu integer ut cras neque felis, nec. Sed
        eget arcu, in nulla felis vitae amet. Malesuada dignissim neque nullam
        ut. Semper consequat morbi cursus ut. Cursus non, euismod integer id
        urna sodales ornare ultrices. Imperdiet suscipit enim orci, sed praesent
        elementum. Dolor urna, augue senectus proin nunc, volutpat suspendisse.
      </p>
    </AboutUsContainer>
  )
}

export { AboutUsComponent }
