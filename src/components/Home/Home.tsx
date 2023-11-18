import React from 'react'
import { useLoaderData } from 'react-router-dom'
import MovieList from '../MovieList/MovieList'

export default function Home() {
  const movies = useLoaderData()
  return (
    <>
      <div className="banner-img"></div>
      <MovieList />
      {console.log('movies', movies)}
    </>
  )
}
