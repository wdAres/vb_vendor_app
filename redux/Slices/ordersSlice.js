import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentData: [],
  statusOptions: [],
};

export const ordersSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    // searchQuery: (state, action) => {
    //   state.data = action.payload;
    // },
    setOrderDetails: (state,action)=> {
        state.currentData = action.payload
    },
    setOrderStatusList:(state,action)=>{
        state.statusOptions = action.payload
    },
    emptyOrderDetails:(state,action)=>{
        state.currentData = []
        state.statusOptions = []
    }
  },
});

export const { searchQuery } = ordersSlice.actions;

export default ordersSlice.reducer;
