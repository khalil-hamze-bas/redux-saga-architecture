import {GET_PRODUCT, SET_PRODUCT} from './types';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    products: []
}

function productReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                products: action.products
            };
        default:
            return state;
    }
};

const persistConfig = {
    key: 'products',
    storage: AsyncStorage,
};

export default persistReducer(persistConfig, productReducer);