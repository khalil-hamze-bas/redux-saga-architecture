import { all } from 'redux-saga/effects';
import { watchFetchProduct } from './modules/products/saga';

export default function* rootSaga() {
    yield all([
        watchFetchProduct()
    ]);
};
