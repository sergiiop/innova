import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import { useViews } from '../../views'

const Routes = () => {
  const { useScreen } = useViews()
  const { Home } = useScreen()
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export { Routes }
