import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { MovieState } from '.'



const initialState: MovieState = {
  movies: [],
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
        state.movies = action.payload
    },
    errorMovies: (state, action) => {
        state.movies = undefined
    }
  },
})

export const getMovies = (state: any) => state.movies.movies;

// Action creators are generated for each case reducer function
export const { addMovies, errorMovies } = movieSlice.actions

export default movieSlice.reducer