import styled from 'styled-components'

export const HeroContainer = styled.section`
  height: 80vh;
  position: relative;
  display: flex;
  justify-content: center;
`

export const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`

export const HeroParagraph = styled.span`
  font-size: 4rem;
  color: #053396;
  display: block;
  width: 80vw;
  font-weight: bold;
  @media screen and (min-width: 600px) {
    font-size: 5rem;
  }
`

export const HeroContent = styled.div`
  position: absolute;
  top: 20rem;
`
