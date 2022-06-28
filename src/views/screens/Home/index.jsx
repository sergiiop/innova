import { useLayouts } from '../../layouts'

const Home = () => {
  const { PublicLayout } = useLayouts()
  return (
    <PublicLayout>
      <div>Hello</div>
    </PublicLayout>
  )
}

export { Home }
