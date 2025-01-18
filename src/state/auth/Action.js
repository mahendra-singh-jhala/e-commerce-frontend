import axios from "axios"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";
import { API_BASE_URL } from "../../config/api"


const registerRequest = () => ({ type: REGISTER_REQUEST })
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user })
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error })

export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest())
    try {
        const res = await axios.post(`${API_BASE_URL}/api/auth/register`, userData);
        const data = res.data;

        dispatch(registerSuccess(data))

    } catch (error) {
        dispatch(registerFailure(error.message))
    }
}


const loginRequest = () => ({ type: LOGIN_REQUEST })
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user })
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error })

export const login = (loginData) => async (dispatch) => {
    dispatch(loginRequest())
    try {
        const res = await axios.post(`${API_BASE_URL}/api/auth/login`, loginData)
        const user = res.data
        if (user) {
            localStorage.setItem("token", JSON.stringify(res.data))
        }

        dispatch(loginSuccess())
    } catch (error) {
        dispatch(loginFailure(error.message))
    }
}


const getUserRequest = () => ({ type: GET_USER_REQUEST })
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user })
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error })

export const getUser = () => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token")).token

    dispatch(getUserRequest());
    try {
        const res = await axios.get(`${API_BASE_URL}/api/user/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const user = res.data;
        dispatch(getUserSuccess(user));
    } catch (error) {
        dispatch(getUserFailure(error.message));
    }
};


export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT, payload: null})
    localStorage.clear();
}