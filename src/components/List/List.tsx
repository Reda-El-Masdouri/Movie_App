import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './List.scss'
import { ListProps } from './ListProps'
import { MovieData, MovieSearch, showSearch } from '../../features/movies'

export default function List({ title, data }: ListProps) {
  return data ? (
    <>
      <div className="data-wrapper">
        <div className="data-list">
          <h2>{title} :</h2>
          <div className="data-container">
            {data.length > 0 ? (
              data.map(
                (item: MovieData | MovieSearch | showSearch, index: number) => (
                  <MovieCard key={index} data={item} />
                )
              )
            ) : (
              <h2>Aucun Resultat</h2>
            )}
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="data-error">
        <h3>Une erreur est survenu ...</h3>
      </div>
    </>
  )
}
