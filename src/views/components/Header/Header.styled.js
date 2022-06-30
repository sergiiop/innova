import styled from 'styled-components'

export const LogoContain = styled.img`
  width: 40px;
  height: 30px;
  object-fit: contain;
`
export const HeaderContainer = styled.header`
  height: 43px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 1rem;
  @media screen and (min-width: 600px) {
    margin-left: 4rem;
  }
`

export const Span = styled.span`
  font-size: 1rem;
  font-weight: bold;
  @media screen and (min-width: 600px) {
    font-size: 2rem;
  }
`
