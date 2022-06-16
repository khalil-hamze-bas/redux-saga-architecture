import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from '@redux-saga/core';
import productReducer from './modules/products/reducer';
import rootSaga from './rootSagas';

const cr = combineReducers({
    products: productReducer
});

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];

let store = createStore(cr, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);

export { store, persistor };