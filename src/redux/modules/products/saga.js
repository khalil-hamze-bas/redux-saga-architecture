import { call, put, take, takeEvery } from 'redux-saga/effects';
import { getProduct, setProduct } from './actions';
import { GET_PRODUCT } from './types';
import * as API from '@api';

function* fetchProduct(action) {
    try {
        const products = yield call(API.fetchProducts);
        yield put(setProduct(products));
        return products;
    } catch (error) {
        console.log('Products', error);
    }
}

export function* watchFetchProduct() {
    yield takeEvery(GET_PRODUCT, fetchProduct);
}

