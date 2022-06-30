import styled from 'styled-components'

export const InformationContainer = styled.section`
  padding-top: 6rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-self: center;
  max-width: 1200px;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 700px) {
    flex-direction: row;
    gap: 4rem;
  }
`

export const FirstContainer = styled.div``

export const SecondContainer = styled.div``
