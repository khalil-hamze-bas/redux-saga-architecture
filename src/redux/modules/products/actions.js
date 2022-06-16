import { GET_PRODUCT, SET_PRODUCT } from './types';


export function getProduct() {
    return {
        type: GET_PRODUCT,
        payload: {}
    }
}

export function setProduct(products) {
    return {
        type: SET_PRODUCT,
        products
    }
}