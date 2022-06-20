import { all } from 'redux-saga/effects';
import { watchLogin } from './modules/auth/login/saga';
import { watchFetchProduct } from './modules/products/saga';

export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchFetchProduct()
    ]);
};
