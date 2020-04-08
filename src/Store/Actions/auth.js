import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    };
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
}

export const logout = () => {
    console.log('inside logout method');
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
           dispatch(logout()); 
        }, expirationTime * 1000)
    };
}

export const authLogin = (username, password) => {
    return dispatch => {
        const BASE_URL = 'api.theprojectforge.com';
        dispatch(authStart());
        axios.post(`http://${BASE_URL}/rest-auth/login/`, {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err));
        })
    };
}

export const authSignup = (username, firstname, lastname, email, password1, password2) => {
    return dispatch => {
        const BASE_URL = 'api.theprojectforge.com';
        dispatch(authStart());
        axios.post(`http://${BASE_URL}/rest-auth/registration/`, {
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            password1: password1,
            password2: password2
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err));
        })
    };
}

export const authCheckState = () => {
    return dispatch => {
        console.log('inside authCheckState dispatch');
        const token = localStorage.getItem('token');
        if (token === undefined) {
            console.log('token is undefined');
            dispatch(logout());
        } else {
            console.log('token exists');
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date()) {
                console.log('token expired');
                dispatch(logout());
            } else {
                console.log('token is ok')
                console.log(token)
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}
