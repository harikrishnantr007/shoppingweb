import { createSlice } from "@reduxjs/toolkit";
const initialsate=[];

const Cartslice=createSlice({
    name:'cart',
    initialState:initialsate,
    reducers:{
        add(state,action)
        {
            state.push(action.payload)
        
        },
        remove(state,action)
        {
           return state.filter((m)=>m.id!==action.payload)
        }
    }
})
export const {add,remove}=Cartslice.actions;
export default Cartslice.reducer;