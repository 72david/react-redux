import { createSlice } from "@reduxjs/toolkit";



const productSlice=createSlice({
    name:'products',
    initialState:{
        products:[
            "Laptap","pen","Mobile","Ear Buds","TV","Head Phones"
        ],
        cart:{

        }
    },
    reducers:{
        addCart:(state,action)=>{
            const productname=action.payload
            const newCount=state.cart[productname]?state.cart[productname]+1:1
            state.cart={...state.cart,[productname]:newCount}
        },deleteCart:(state,action)=>{
            const productname=action.payload
            if(!state.cart[productname])return
            const newCount=state.cart[productname]-1
            const newCart={...state.cart,[productname]:newCount}
            if(newCount===0)delete newCart[productname]
            state.cart=newCart
        }
    }
})

export default productSlice.reducer

export const {addCart,deleteCart}=productSlice.actions