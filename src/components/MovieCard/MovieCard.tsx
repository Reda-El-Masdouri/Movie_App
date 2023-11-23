import React from 'react'
import { MovieData, MovieSearch } from '../../features/movies'
import './MovieCard.scss'

export interface MovieCardProps {
  data: MovieData | MovieSearch | undefined
}

export default function MovieCard({ data }: MovieCardProps) {
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={data?.Poster} alt={data?.Title} />
        </div>
        <div className="card-corp">
          <div className="card-info">
            <h3>{data?.Title}</h3>
            <p>{data?.Year}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
