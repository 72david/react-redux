import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        increase:(state)=>{
            state.count=state.count+1
        },
        decrease:(state)=>{
            state.count=state.count-1
        },
        reset:(state)=>{
            state.count=0
        }
    }
})

export default counterSlice.reducer

export const {increase,decrease,reset}=counterSlice.actions

