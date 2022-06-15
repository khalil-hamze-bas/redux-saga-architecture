import { GET_PRODUCT } from './types';

export function getProduct() {
    return {
        type: GET_PRODUCT,
        payload: {}
    }
}