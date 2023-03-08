import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "users",
  initialState: {
    user: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload;
      state.user.push(newProduct);
    },
  },
});

export const { addProduct } = user.actions;
export default user.reducer;
