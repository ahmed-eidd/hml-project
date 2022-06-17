import { call, put, takeLatest } from '@redux-saga/core/effects';
import {
  getSingleProductApi,
  addSingleProductToCartApi,
  updateSingleProductToCartApi,
  deleteSingleProductFromCartApi,
} from './api';
import {
  getSingleProductAction,
  getSingleProductActionSuccess,
  setProductsErrorAction,
  setProductsIsLoadingAction,
  getRelatedProductsAction,
  addSingleProductToCartActionSuccess,
  addSingleProductToCartAction,
  deleteSingleProductFromCartAction,
  deleteSingleProductFromCartSuccessAction,
  deleteRelatedProductFromCartAction,
  deleteRelatedProductFromCartSuccessAction,
  updateSingleProductInCartAction,
  setCartIsLoadingAction,
  addRelatedProductToCartActionSuccess,
  updateRelatedProductInCartAction,
  addRelatedProductToCartAction,
} from './slice';

function* getSingleProductSaga({ payload }) {
  yield put(setProductsIsLoadingAction(true));

  /* Calling the axiosInstance.get method and passing the payload as a parameter. */
  try {
    const response = yield call(getSingleProductApi, payload);
    const { data } = response;
    yield put(getSingleProductActionSuccess(data?.data?.product));
    yield put(getRelatedProductsAction(data?.data?.relatedProducts));
  } catch (error) {
    yield put(setProductsErrorAction(error));
  } finally {
    yield put(setProductsIsLoadingAction(false));
  }
}
function* addSingleProductQuantitySaga({ payload }) {
  yield put(setCartIsLoadingAction(true));

  /* Calling the axiosInstance.post method and passing the payload as a parameter. */
  try {
    const response = yield call(addSingleProductToCartApi, payload);
    const { data } = response;
    yield put(addSingleProductToCartActionSuccess(data?.data?.item));
  } catch (error) {
    yield put(setProductsErrorAction(error));
  } finally {
    yield put(setCartIsLoadingAction(false));
  }
}

function* updateSingleProductQuantitySaga({ payload }) {
  yield put(setCartIsLoadingAction(true));

  /* Calling the axiosInstance.post method and passing the payload as a parameter. */
  try {
    const response = yield call(updateSingleProductToCartApi, payload);
    const { data } = response;
    yield put(addSingleProductToCartActionSuccess(data?.data?.item));
  } catch (error) {
    yield put(setProductsErrorAction(error));
  } finally {
    yield put(setCartIsLoadingAction(false));
  }
}

function* deleteSingleProductFromCartSaga({ payload }) {
  yield put(setCartIsLoadingAction(true));

  /* Calling the axiosInstance.get method and passing the payload as a parameter. */
  try {
    yield call(deleteSingleProductFromCartApi, payload);
    yield put(deleteSingleProductFromCartSuccessAction(payload));
  } catch (error) {
    yield put(setProductsErrorAction(error));
  } finally {
    yield put(setCartIsLoadingAction(false));
  }
}

function* addRelatedProductQuantitySaga({ payload }) {
  /* Calling the axiosInstance.post method and passing the payload as a parameter. */
  try {
    const response = yield call(addSingleProductToCartApi, payload);
    const { data } = response;
    yield put(addRelatedProductToCartActionSuccess(data?.data?.item));
  } catch (error) {
    yield put(setProductsErrorAction(error));
  }
}

function* updateRelatedProductQuantitySaga({ payload }) {
  /* Calling the axiosInstance.post method and passing the payload as a parameter. */
  try {
    const response = yield call(updateSingleProductToCartApi, payload);
    const { data } = response;
    yield put(addRelatedProductToCartActionSuccess(data?.data?.item));
  } catch (error) {
    yield put(setProductsErrorAction(error));
  }
}

function* deleteRelatedProductFromCartSaga({ payload }) {
  /* Calling the axiosInstance.get method and passing the payload as a parameter. */
  try {
    yield call(deleteSingleProductFromCartApi, payload);
    yield put(deleteRelatedProductFromCartSuccessAction(payload));
    console.log(payload);
  } catch (error) {
    yield put(setProductsErrorAction(error));
  }
}

// EXPORT
export default function* prouductsSaga() {
  yield takeLatest(getSingleProductAction.type, getSingleProductSaga);
  yield takeLatest(
    addSingleProductToCartAction.type,
    addSingleProductQuantitySaga
  );
  yield takeLatest(
    addRelatedProductToCartAction.type,
    addRelatedProductQuantitySaga
  );
  yield takeLatest(
    updateSingleProductInCartAction.type,
    updateSingleProductQuantitySaga
  );
  yield takeLatest(
    updateRelatedProductInCartAction.type,
    updateRelatedProductQuantitySaga
  );
  yield takeLatest(
    deleteSingleProductFromCartAction.type,
    deleteSingleProductFromCartSaga
  );

  yield takeLatest(
    deleteRelatedProductFromCartAction.type,
    deleteRelatedProductFromCartSaga
  );
}
