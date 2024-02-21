import { createSlice } from "@reduxjs/toolkit";

const taskSlice=createSlice({
    name:"cart",
    initialState:{
        item:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.item.push(action.payload)
        },
        clearCart:(state,action)=>{
            state.item.length=0
        }
    }
}

)
export const {addItem,clearCart}=taskSlice.actions;

export default taskSlice.reducer;