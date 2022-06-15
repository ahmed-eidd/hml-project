import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  count: 0,
  isLoading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getSingleProductAction(state, { payload }) {
      state.items = [...state.items, payload];
      state.count++;
    },
    getAllProductsAction(state, { payload }) {
      state.items = payload;
      state.count = payload.length;
    },
    getProductsIsLoadingAction(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const {
  getAllProductsAction,
  getProductsIsLoadingAction,
  getSingleProductAction,
} = productsSlice.actions;
export default productsSlice.reducer;
