import React from 'react'
import { MovieData, MovieSearch } from '../../features/movies'

export interface MovieCardProps {
  data: MovieData | MovieSearch | undefined
}

export default function MovieCard({ data }: MovieCardProps) {
  return <div>MovieCard</div>
}
