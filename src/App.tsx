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
import { homeLoader } from './components/Home/HomeUtil'
import MovieError from './components/MovieError/MovieError'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} loader={homeLoader} />
      <Route path="/about" element={<About />} />
      <Route
        path="/movie/:imdbID"
        element={<MovieDetail />}
        errorElement={<MovieError />}
      />
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
