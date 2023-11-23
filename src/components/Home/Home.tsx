import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import MovieList from '../MovieList/MovieList'
import { addMovies, errorMovies } from '../../features/movies/movieSlice'
import { useDispatch } from 'react-redux'

export default function Home() {
  const movies = useLoaderData()
  const dispatch = useDispatch()
  const response = []
  if (movies?.data?.Search === undefined) response.push(movies?.data)
  useEffect(() => {
    if (movies?.data?.Response === 'True' || movies?.statusText === 'OK')
      dispatch(
        addMovies(
          movies?.data?.Search !== undefined ? movies?.data?.Search : response
        )
      )
    if (movies?.code === 'ERR_BAD_REQUEST') dispatch(errorMovies(undefined))
  })
  return (
    <>
      <div className="banner-img"></div>
      <MovieList />
    </>
  )
}
