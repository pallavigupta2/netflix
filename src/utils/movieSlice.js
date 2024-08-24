import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVedio:null
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVedio:(state,action)=>{
            state.trailerVedio = action.payload
        }
    }
})
export const {addNowPlayingMovie,addTrailerVedio} = movieSlice.actions
export default movieSlice.reducer