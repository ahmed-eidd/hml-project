import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  count: 0,
  isLoading: false,
  error: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getSingleProductAction(state, { payload }) {
      state.isLoading = true;
    },
    getSingleProductActionSuccess(state, { payload }) {
      state.items = [...state.items, payload];
      state.count++;
    },
    getAllProductsAction(state, { payload }) {
      state.items = payload;
      state.count = payload.length;
    },
    setProductsIsLoadingAction(state, { payload }) {
      state.isLoading = payload;
    },

    setProductsErrorAction(state, { payload }) {
      state.error = payload;
    },
  },
});

export const {
  getAllProductsAction,
  setProductsIsLoadingAction,
  getSingleProductAction,
  getSingleProductActionSuccess,
  setProductsErrorAction,
} = productsSlice.actions;
export default productsSlice.reducer;

