import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../components/product/productSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
  },
});
export default store;
