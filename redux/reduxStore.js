import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./Slices/ordersSlice";

export const reduxStore = configureStore({
  reducer: {
    order: orderReducer,
  },
});
