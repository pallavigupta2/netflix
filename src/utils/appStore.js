import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const appStore = configureStore({
    reducer:{
        userAuth:userSlice
    }
})

export default appStore