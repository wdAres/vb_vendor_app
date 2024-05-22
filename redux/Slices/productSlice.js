import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: {},
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

      console.log(state.productData)

      state.productData = {...state.productData , ...action.payload}

    },
  },
});

export const { emptyProductData, updateProductData ,deletingGroupBuyFields,updateDataExceptGroupBuy } = productSlice.actions;

export default productSlice.reducer;
