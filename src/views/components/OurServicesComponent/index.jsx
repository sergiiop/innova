import React, { useEffect, useState } from 'react'
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
    title: 'Titulo 1',
    img: Servicio1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae at non pretium vitae tristique egestas.'
  },
  {
    title: 'Titulo 2',
    img: Servicio2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae at non pretium vitae tristique egestas.'
  },
  {
    title: 'Titulo 3',
    img: Servicio3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae at non pretium vitae tristique egestas.'
  }
]

const OurServicesComponent = () => {
  const [showServices, setShowServices] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    console.log(width)
    if (width >= 1000) {
      setShowServices(true)
    } else {
      setShowServices(false)
    }
  }, [width])

  return (
    <OurServicesContainer id='services' className='container'>
      <TitleComponent>Nuestros servicios</TitleComponent>
      <ServicesContainer>
        {servicesData.map((service, index) => {
          return (
            <ServiceContent key={index}>
              <Image src={service.img}></Image>
              {showServices && (
                <>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </>
              )}
            </ServiceContent>
          )
        })}
      </ServicesContainer>
    </OurServicesContainer>
  )
}

export { OurServicesComponent }
