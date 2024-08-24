import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVedio: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVedio: (state, action) => {
      state.trailerVedio = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovie: (state, action) => {
        state.upcomingMovies = action.payload;
      },
      addTrendingMovie: (state, action) => {
        state.trendingMovies = action.payload;
      },
      addTrendingTVShows: (state, action) => {
        state.trendingShows = action.payload;
      },
  },
});
export const {
  addNowPlayingMovie,
  addTrailerVedio,
  addPopularMovie,
  addTopRatedMovie,
  addUpcomingMovie,
  addTrendingMovie,
  addTrendingTVShows,
} = movieSlice.actions;
export default movieSlice.reducer;
