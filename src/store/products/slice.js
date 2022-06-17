import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  count: 0,
  relatedProducts: [],
  isLoading: true,
  isLoadingCart: false,
  error: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Get all products reduders
    getRelatedProductsAction(state, { payload }) {
      state.relatedProducts = payload;
    },
    getAllProductsAction(state, { payload }) {
      state.items = payload;
      state.count = payload.length;
    },

    // Get single product reducers
    getSingleProductAction(state, { payload }) {
      state.isLoading = true;
    },
    getSingleProductActionSuccess(state, { payload }) {
      state.items = [...state.items, payload];
      state.count++;
    },

    // Add to cart reducer

    addSingleProductToCartAction(state, { payload }) {},
    addRelatedProductToCartAction(state, { payload }) {},

    addSingleProductToCartActionSuccess(state, { payload }) {
      const updatedProduct = payload;
      const targetIndex = state.items.findIndex(
        (product) => product.id === updatedProduct.productId
      );
      const oldProduct = state.items[targetIndex];
      if (oldProduct.inCart) {
        // if inCart excits in the item object -> modify the quantity prop
        console.log(oldProduct);
        oldProduct.inCart.quantity = updatedProduct?.quantity;
        state.items[targetIndex] = oldProduct;
      } else {
        // else just add it to the item object for UI changes
        const newCart = {
          quantity: updatedProduct.quantity,
          itemId: updatedProduct.itemId,
          price: updatedProduct.price,
        };
        oldProduct.inCart = newCart;
        state.items[targetIndex] = oldProduct;
      }
    },
    addRelatedProductToCartActionSuccess(state, { payload }) {
      /* Updating the quantity of the product in the cart. */
      const updatedProduct = payload;
      const targetIndex = state.relatedProducts.findIndex(
        (product) => product.id === updatedProduct.productId
      );
      const oldProduct = state.relatedProducts[targetIndex];
      if (oldProduct.inCart) {
        // if inCart excits in the item object -> modify the quantity prop
        console.log(oldProduct);
        oldProduct.inCart.quantity = updatedProduct?.quantity;
        state.relatedProducts[targetIndex] = oldProduct;
      } else {
        // else just add it to the item object for UI changes
        const newCart = {
          quantity: updatedProduct.quantity,
          itemId: updatedProduct.itemId,
          price: updatedProduct.price,
        };
        oldProduct.inCart = newCart;
        state.relatedProducts[targetIndex] = oldProduct;
      }
    },

    // update cart reducer

    updateSingleProductInCartAction(state, { payload }) {},
    updateRelatedProductInCartAction(state, { payload }) {},

    // Delete from cart reducers

    deleteSingleProductFromCartSuccessAction(state, { payload }) {
      /* Finding the index of the product in the items array and then updating the inCart property to
    null. */
      const targetIndex = state.items.findIndex(
        (product) => product.inCart.itemId === payload
      );
      const updateProduct = state.items[targetIndex];
      updateProduct.inCart = null;
      state.items[targetIndex] = updateProduct;
    },
    deleteRelatedProductFromCartSuccessAction(state, { payload }) {
      /* Finding the index of the product in the relatedProducts array and then updating the inCart
      property to null. */
      const targetIndex = state.relatedProducts.findIndex(
        (product) => product?.inCart?.itemId === payload
      );
      const updateProduct = state.relatedProducts[targetIndex];
      console.log(payload, targetIndex, updateProduct);
      updateProduct.inCart = null;
      state.relatedProducts[targetIndex] = updateProduct;
    },

    deleteSingleProductFromCartAction(state, { payload }) {},
    deleteRelatedProductFromCartAction(state, { payload }) {},

    // UI Reducers
    setProductsIsLoadingAction(state, { payload }) {
      state.isLoading = payload;
    },
    setCartIsLoadingAction(state, { payload }) {
      state.isLoadingCart = payload;
    },

    setProductsErrorAction(state, { payload }) {
      state.error = payload;
    },
  },
});

export const {
  getAllProductsAction,
  setProductsIsLoadingAction,
  setCartIsLoadingAction,
  getSingleProductAction,
  getSingleProductActionSuccess,
  getRelatedProductsAction,
  setProductsErrorAction,
  addSingleProductToCartAction,
  addRelatedProductToCartAction,
  addSingleProductToCartActionSuccess,
  addRelatedProductToCartActionSuccess,
  deleteSingleProductFromCartAction,
  deleteRelatedProductFromCartAction,
  deleteSingleProductFromCartSuccessAction,
  deleteRelatedProductFromCartSuccessAction,
  updateSingleProductInCartAction,
  updateRelatedProductInCartAction,
} = productsSlice.actions;
export default productsSlice.reducer;
