import { createSlice } from "@reduxjs/toolkit";
const initialsate=[];

const Serachslice=createSlice({
    name:'search',
    initialState:initialsate,
    reducers:{
        setSearchreult(state,action)
        {
            state.push(action.payload)
            
        }
    }
})
export const {setSearchreult}=Serachslice.actions;

export default Serachslice.reducer;