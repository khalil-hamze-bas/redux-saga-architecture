import {GET_PRODUCT, GET_PRODUCT_SUCCESS} from './types';

const initialState = {
    products: []
}

function productReducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                payload: action.payload
            };
        default:
            return state;
    }
};

export default productReducer;