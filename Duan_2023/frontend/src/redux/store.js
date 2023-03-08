import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../components/user/product/productSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
  },
});
export default store;
