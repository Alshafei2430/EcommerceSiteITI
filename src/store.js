import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartsSlice";
import productsSlice from "./reducers/productsSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
  },
});
