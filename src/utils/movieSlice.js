import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVedio: null,
    popularMovies:null,
    searchMovies:null,
    topRatedMovies:null,
    trendingMovies:null,
    trendingShows:null,
    upcomingMovies:null,
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
      searchMovies: (state, action) => {
        state.searchMovies = action.payload;
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
  searchMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
