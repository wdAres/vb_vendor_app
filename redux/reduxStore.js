import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./Slices/ordersSlice";
import productReducer from "./Slices/productSlice";

export const reduxStore = configureStore({
  reducer: {
    order: orderReducer,
    product:productReducer
  },
});
