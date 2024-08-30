import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../Api/Api'

export const fetchproducts=createAsyncThunk('product/fetchproducts',async()=>{
    const response=await api.get();
    return response.data;

})
const initialsate=[];

const Productslice=createSlice({
    name:'product',
    initialState:initialsate,
    reducers:{
    
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchproducts.pending,()=>{
            console.log('pending')
        })
        .addCase(fetchproducts.fulfilled,(state,action)=>{
            console.log('Fetched Successfully');
            return {...state,data:action.payload};
        })
        .addCase(fetchproducts.rejected,()=>{
            console.log("rejected")
        })
    }
})
export const {}=Productslice.actions;
export default Productslice.reducer;