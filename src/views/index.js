import { useComponents } from './components'
import { useLayouts } from './layouts'
import { useScreen } from './screens'

const useViews = () => {
  return {
    useComponents,
    useLayouts,
    useScreen
  }
}

export { useViews }
