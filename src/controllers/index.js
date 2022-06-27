import { useScreenHooks } from './screenHooks'
import { useGeneralHooks } from './generalHooks'
import { useComponentHooks } from './componentHooks'

const useControllers = () => {
  return {
    useScreenHooks,
    useComponentHooks,
    useGeneralHooks
  }
}

export { useControllers }
