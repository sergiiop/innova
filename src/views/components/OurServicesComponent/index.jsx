import React from 'react'
import { TitleComponent } from '../TitleComponent'
import {
  Image,
  OurServicesContainer,
  ServiceContent,
  ServicesContainer
} from './OurServices.styled'

import { useAssets } from '../../../assets'
const { useImages } = useAssets()
const { Servicio1, Servicio2, Servicio3 } = useImages()

const servicesData = [
  {
    img: Servicio1
  },
  {
    img: Servicio2
  },
  {
    img: Servicio3
  }
]

const OurServicesComponent = () => {
  return (
    <OurServicesContainer className='container'>
      <TitleComponent>Nuestros servicios</TitleComponent>
      <ServicesContainer>
        {servicesData.map((service, index) => {
          return (
            <ServiceContent key={index}>
              <Image src={service.img}></Image>
            </ServiceContent>
          )
        })}
      </ServicesContainer>
    </OurServicesContainer>
  )
}

export { OurServicesComponent }
