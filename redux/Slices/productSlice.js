import { createSlice } from "@reduxjs/toolkit";
import { setNewProduct } from "../Thunk/productThunk";

const initialState = {
  productData: {},
  productLoadingState: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProductData: (state, action) => {
      state.productData = { ...state.productData, ...action.payload };
    },
    emptyProductData: (state, action) => {
      state.productData = {};
    },
    deletingGroupBuyFields: (state, action) => {
      const groupBuyArr = [
        "groupByEndDate",
        "groupByStartDate",
        "groupByDiscount",
        "groupByDiscountType",
        "groupByOrderReach",
        "groupByMinOrder",
        "groupByMinOrder",
      ];
      groupBuyArr.forEach((key) => {
        if (key in state.productData) {
          delete state.productData[key];
        }
      });
    },
    updateDataExceptGroupBuy: (state, action) => {
      const groupBuyArr = [
        "groupByEndDate",
        "groupByStartDate",
        "groupByDiscount",
        "groupByDiscountType",
        "groupByOrderReach",
        "groupByMinOrder",
        "groupByMinOrder",
      ];
      groupBuyArr.forEach((key) => {
        if (key in state.productData) {
          delete state.productData[key];
        }
      });

      state.productData = { ...state.productData, ...action.payload };
    },
    updateLoading: (state, action) => {
      state.productLoadingState = !state.productLoadingState;
    },
  },
});

export const {
  emptyProductData,
  updateProductData,
  deletingGroupBuyFields,
  updateDataExceptGroupBuy,
  updateLoading,
} = productSlice.actions;

export default productSlice.reducer;
