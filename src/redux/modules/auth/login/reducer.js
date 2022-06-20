import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './types';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    loading: false,
    user: [],
    error: null
}

function authReducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.response,
                loading: false
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.error,
                loading:false
            };
        default:
            return state;
    }
};

const persistConfig = {
    key: 'user',
    storage: AsyncStorage,
};

export default persistReducer(persistConfig, authReducer);