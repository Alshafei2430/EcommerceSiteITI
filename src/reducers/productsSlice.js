import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    getAllProducts: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable sstate.count += 1;
      state.products = products;
    },
    getProductsWithFilter: (state, action) => {
      console.log(action);
      state.products = products.filter(
        (product) => product.category === action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAllProducts, getProductsWithFilter } = productsSlice.actions;

export default productsSlice.reducer;
