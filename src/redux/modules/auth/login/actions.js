import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./types";

export const login = (user) => ({
    type: LOGIN_REQUEST,
    payload: user
});