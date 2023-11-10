import { createSlice } from "@reduxjs/toolkit";
const productsURL = "https://fakestoreapi.com/products";
const initialStateJackpot = {
  data: [],
};
const ProductSlice = createSlice({
  name: "products",
  initialState: initialStateJackpot,
  reducers: {
    fetchproducts(state, action) {
      state.data = action.payload;
    },
  },
});
export const { fetchproducts } = ProductSlice.actions;
export default ProductSlice.reducer;

export function getProducts() {
  return async function getProductsThunk(dispatch, getState) {
    const data = await fetch(productsURL);
    const response = await data.json();
    dispatch(fetchproducts(response));
  };
}
