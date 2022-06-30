import styled from 'styled-components'

export const OurServicesContainer = styled.section`
  padding-top: 7rem;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-self: center;
`

export const ServicesContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`

export const ServiceContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 300px;
`

export const Image = styled.img`
  border-radius: 1rem;
`
