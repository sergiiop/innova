import { Header } from './Header'
import { HeroComponent } from './HeroComponent'
import { AboutUsComponent } from './AboutUsComponent'
import { ObjetivesComponent } from './ObjetivesComponent'
import { OurServicesComponent } from './OurServicesComponent'
import { ContactForm } from './ContactForm'
import { ContactInformation } from './ContactInformation'
import { Footer } from './Footer'

const useComponents = () => {
  return {
    Header,
    HeroComponent,
    AboutUsComponent,
    ObjetivesComponent,
    OurServicesComponent,
    ContactForm,
    ContactInformation,
    Footer
  }
}

export { useComponents }
