import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    member:null,
    error:null,
    loading:false
}


const memberSlice = createSlice({
    name:'member',
    initialState,
    reducers:{
        allmembers:(state,action)=>{
            state.members = action.payload;
        }
    }
})