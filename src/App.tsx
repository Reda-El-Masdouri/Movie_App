import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import './style.scss'
import RootLayout from './components/RootLayout/RootLayout'
import About from './components/About/About'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/movie/:imdbID" element={<MovieDetail />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
)
export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
