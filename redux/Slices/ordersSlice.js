import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[]
}

export const ordersSlice = createSlice({
    name:'order',
    initialState:initialState,
    reducers:{
        searchQuery : (state,action)=>{
            state.data = [{d:1}]
        }
    }
})


export const {searchQuery} = ordersSlice.actions

export default ordersSlice.reducer