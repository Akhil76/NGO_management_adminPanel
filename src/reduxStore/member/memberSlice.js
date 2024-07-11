import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    member:[],
    error:null,
    loading:true
}


const memberSlice = createSlice({
    name:'member',
    initialState,
    reducers:{
        allmembers(state,action){
            state.members = action.payload;
            state.loading = false;
            state.error = null;
        }
    }
})


export default memberSlice.reducer;