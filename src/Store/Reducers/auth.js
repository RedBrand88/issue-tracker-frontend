import * as actionTypes from '../Actions/actionTypes';

import { updateObject } from '../utility';

const initialState = {
    token: null,
    error: null,
    loading: false
}

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        error: null,
        loading: false
    });
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null 
    });
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: 
            authStart(state, action);
            break;
        case actionTypes.AUTH_SUCCESS: 
            authSuccess(state, action);
            break;
        case actionTypes.AUTH_FAIL: 
            authFail(state, action);
            break;
        case actionTypes.AUTH_LOGOUT: 
            authLogout(state, action);
            break;
        default:
            return state;
    }
}

export default reducer;