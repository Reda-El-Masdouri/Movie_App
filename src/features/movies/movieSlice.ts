import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Movie {
    title: string
    year: string
    rated: string
    released: string
    runtime: string
    genre: string
    director: string
    writer: string
    actors: string
    plot: string
    language: string
    country: string
    awards: string
    poster: string
}

export interface MovieState {
  movies: Movie[]
}

const initialState: MovieState = {
  movies: [],
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
        state.movies = action.payload
    }
  },
})

export const getMovies = (state: any) => state.movies.movies;

// Action creators are generated for each case reducer function
export const { addMovies } = movieSlice.actions

export default movieSlice.reducer