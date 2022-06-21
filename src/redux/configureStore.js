import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from '@redux-saga/core';
import productReducer from './modules/products/reducer';
import authReducer from './modules/auth/login/reducer';
import rootSaga from './rootSagas';

const cr = combineReducers({
    auth: authReducer,
    products: productReducer
});

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];

let store = createStore(cr, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);

export { store, persistor };