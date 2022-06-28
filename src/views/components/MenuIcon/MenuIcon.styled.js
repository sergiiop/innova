import styled from 'styled-components'

export const MenuContainer = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  transition: all 0.5s;
  margin-right: 10px;
  &.active {
    position: absolute;
    top: 20px;
    left: 50px;
  }
`

export const Lines = styled.span`
  display: block;
  width: 100%;
  background: #053396;
  transition: opacity 0.5s, top 0.5s, transform 0.5s;
  height: 0.5rem;
  position: absolute;
  ${props =>
    props.first &&
    `
    top: 0;
    `}
  
  ${props =>
    props.second &&
    `
    top: 1rem;
  `}
  ${props =>
    props.third &&
    `
    top: 2rem;
    `}
  &.active{
    ${props =>
      props.first &&
      `
      height: 0.25rem;
      width: 50%;
      top: 0.4rem;
      left: 0;
      transform: rotate(-45deg);
    `}

  ${props => props.second && ``}

  ${props =>
    props.third &&
    `
      height: 0.25rem;
      width: 50%;
      top: 1.8rem;
      left: 0;
      transform: rotate(45deg);
    `}
  }
`
