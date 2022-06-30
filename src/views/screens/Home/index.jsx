import { useLayouts } from '../../layouts'
import { useComponents } from '../../components'

const Home = () => {
  const { PublicLayout } = useLayouts()
  const {
    HeroComponent,
    AboutUsComponent,
    ObjetivesComponent,
    OurServicesComponent,
    ContactForm,
    ContactInformation
  } = useComponents()
  return (
    <PublicLayout>
      <HeroComponent />
      <AboutUsComponent />
      <ObjetivesComponent />
      <OurServicesComponent />
      <ContactForm />
      <ContactInformation />
    </PublicLayout>
  )
}

export { Home }
