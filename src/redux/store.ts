import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./fetures/todoSlice";

const store=configureStore({
    reducer:{
        todo:todoSlice
    },
    middleware:(get)=>get()

})

export default store;