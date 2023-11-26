import React from 'react'
import { useSelector } from 'react-redux'
import { getMovies } from '../../features/movies/movieSlice'
import { MovieData, MovieSearch } from '../../features/movies'
import './MovieList.scss'
import { getShows } from '../../features/shows/showSlice'
import List from '../List/List'

export default function MovieList() {
  const movies: MovieData[] | MovieSearch[] | undefined = useSelector(getMovies)
  const shows = useSelector(getShows)
  console.log('movies', movies)
  console.log('shows', shows)

  return (
    <>
      <List title="Movies" data={movies} />
      <List title="Shows" data={shows.Search} />
    </>
  )
}
