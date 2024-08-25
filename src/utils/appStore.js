import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSearchSlice from "./gptSearchSlice";
import langSlice from "./langSlice";

const appStore = configureStore({
    reducer:{
        userAuth:userSlice,
        movies:movieSlice,
        gptSearch:gptSearchSlice,
        lang:langSlice
    }
})

export default appStore