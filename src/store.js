import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartsSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
});
