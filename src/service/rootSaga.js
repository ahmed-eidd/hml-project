import { fork } from 'child_process';
import productsSaga from '../store/products/saga';


export default function* rootSaga() {
  yield fork(productsSaga);
}