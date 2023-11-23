import React from 'react'
import { useSelector } from 'react-redux'
import { getMovies } from '../../features/movies/movieSlice'
import { MovieData, MovieSearch } from '../../features/movies'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.scss'

export default function MovieList() {
  const movies: MovieData[] | MovieSearch[] | undefined = useSelector(getMovies)

  return movies ? (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies :</h2>
          <div className="movie-container">
            {movies.length > 0 ? (
              movies.map((movie: MovieSearch, index: number) => (
                <MovieCard key={index} data={movie} />
              ))
            ) : (
              <h2>Aucun Resultat</h2>
            )}
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="movies-error">
        <h3>Une erreur est survenu ...</h3>
      </div>
    </>
  )
}
