import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import MovieList from '../MovieList/MovieList'
import { addMovies, errorMovies } from '../../features/movies/movieSlice'
import { useDispatch } from 'react-redux'

export default function Home() {
  const movies = useLoaderData()
  const dispatch = useDispatch()

  useEffect(() => {
    if (movies?.data?.Response === 'True')
      dispatch(addMovies(movies?.data?.Search))
    if (movies?.code === 'ERR_BAD_REQUEST') dispatch(errorMovies)
  })
  return (
    <>
      <div className="banner-img"></div>
      <MovieList />
    </>
  )
}
