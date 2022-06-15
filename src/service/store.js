import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import productReducer from '../store/products/slice';

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);