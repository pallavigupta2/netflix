import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name :"GPT Search",
    initialState:{
        showGptSearch:false,
        
    },
    reducers:{
        toggleGptSearch:(state,action)=>{
            state.showGptSearch=!state.showGptSearch
        }
    }
})
export const {toggleGptSearch} = gptSearchSlice.actions
export default gptSearchSlice.reducer