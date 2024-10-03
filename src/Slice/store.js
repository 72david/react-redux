import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice/counterSlice";
import productReducer from "./ProdcutSlice/productSlice";


export default configureStore({
    reducer:{
        counter:counterReducer,
        product:productReducer
    }
})