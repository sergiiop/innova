import {
  HeroContainer,
  HeroContent,
  HeroImg,
  HeroParagraph
} from './HeroComponent.styled'
import { useImages } from '../../../assets/useImages'

const HeroComponent = () => {
  const { Hero } = useImages()
  return (
    <HeroContainer>
      <HeroImg src={Hero} />
      <HeroContent>
        <HeroParagraph>
          INNOVA <br /> CIENCIA Y<br /> TECNOLOGIA
        </HeroParagraph>
      </HeroContent>
    </HeroContainer>
  )
}

export { HeroComponent }
