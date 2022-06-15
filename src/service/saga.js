import { takeLatest, fork } from '@redux-saga/core/effects';
import productsSaga from '../store/products/saga';


export default function* saga() {
  yield fork(productsSaga);
}