import { createSlice } from "@reduxjs/toolkit";

const initialStateJackpot = [];
const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateJackpot,
  reducers: {
    add(state = initialStateJackpot, action) {
      state.push(action.payload);
    },
  },
});
export const { add } = cartSlice.actions;
export default cartSlice;
