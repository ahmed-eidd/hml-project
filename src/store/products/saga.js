import { call, put, takeLatest } from '@redux-saga/core/effects';
import axiosInstance from '../../service/axios';
import { getSingleProductApi } from './api';
import {
  getSingleProductAction,
  getSingleProductActionSuccess,
  setProductsErrorAction,
  setProductsIsLoadingAction,
  getRelatedProductsAction,
} from './slice';

function* getSingleProductSaga({ payload }) {
  console.log('hrer');
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

export default function* prouductsSaga() {
  yield takeLatest(getSingleProductAction.type, getSingleProductSaga);
}
