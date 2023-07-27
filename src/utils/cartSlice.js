import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count: 0,
  },
  reducers: {
    cartCount: (state) => {
      state.count += 1;
    },
    setDefaultCount: (state) => {
      state.count = 0;
    },
  },
});

export const { cartCount, setDefaultCount } = cartSlice.actions;
export default cartSlice.reducer;
