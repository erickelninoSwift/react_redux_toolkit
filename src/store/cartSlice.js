import { createSlice } from "@reduxjs/toolkit";

const initialStateJackpot = [];
const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateJackpot,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((data) => data.id !== action.payload);
    },
  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
