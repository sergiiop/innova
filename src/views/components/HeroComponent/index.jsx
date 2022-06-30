import { HeroContainer, HeroImg, HeroParagraph } from './HeroComponent.styled'
import { useImages } from '../../../assets/useImages'

const HeroComponent = () => {
  const { Hero } = useImages()
  return (
    <HeroContainer>
      <HeroImg src={Hero} />
      <HeroParagraph>
        INNOVA <br /> CIENCIA Y<br /> TECNOLOGIA
      </HeroParagraph>
    </HeroContainer>
  )
}

export { HeroComponent }
