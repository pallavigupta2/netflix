import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name:"lang",
    initialState:{
        preferedLanguage:"en"
    },
    reducers:{
        languageChange:(state,action)=>{
            state.preferedLanguage=action.payload
        }
    }
})
export const {languageChange } = langSlice.actions
export default langSlice.reducer