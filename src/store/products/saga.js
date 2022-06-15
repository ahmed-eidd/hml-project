import { takeLatest } from '@redux-saga/core/effects';
import { getSingleProductAction } from './slice';

function* getSingleProductSaga() {}

export default function* productsSaga() {
  yield takeLatest(getSingleProductAction, getSingleProductSaga);
}
