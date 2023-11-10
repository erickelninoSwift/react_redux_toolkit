import { createSlice } from "@reduxjs/toolkit";

const initialStateJackpot = {
  data: [],
  error: "",
  isLoading: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateJackpot,
  reducers: {
    add(state, action) {
      state.data.push(action.payload);
    },
    remove(state, action) {
      return state.data.filter((data) => data.id !== action.payload);
    },
  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
