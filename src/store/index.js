import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productSlice";
import { cartReducer } from "./slices/cartSlice";
import { authReducer } from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    productSlice: productReducer,
    cartSlice: cartReducer,
    authSlice: authReducer,
  },
});
