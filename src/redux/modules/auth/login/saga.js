import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { login } from './actions';
// import { GET_PRODUCT } from './types';
import * as API from '@api';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './types';

function* login(action) {
    try {
        const response = yield call(API.login(action));
        yield put({ type: LOGIN_SUCCESS , user});
    } catch (error) {
        yield put({ type: LOGIN_FAILURE , error: error.message});
    }
}

export function* watchLogin() {
    yield takeLatest(LOGIN_REQUEST, login);
}
