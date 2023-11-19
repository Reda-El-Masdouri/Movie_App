import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import MovieList from '../MovieList/MovieList'
import { addMovies } from '../../features/movies/movieSlice'
import { useDispatch } from 'react-redux'

export default function Home() {
  const movies = useLoaderData()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addMovies(movies.data))
  })
  return (
    <>
      <div className="banner-img"></div>
      <MovieList />
    </>
  )
}
