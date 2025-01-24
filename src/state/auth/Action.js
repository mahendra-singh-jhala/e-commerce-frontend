import axios from "axios"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";
import { API_BASE_URL } from "../../config/api"


export const register = (userData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })
    try {
        const res = await axios.post(`${API_BASE_URL}/api/auth/register`, userData);
        const data = res.data;

        dispatch({ type: REGISTER_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error })
    }
}

export const login = (loginData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
        const res = await axios.post(`${API_BASE_URL}/api/auth/login`, loginData)
        const user = res.data
        if (user) {
            localStorage.setItem("token", JSON.stringify(res.data))
        }

        dispatch({ type: LOGIN_SUCCESS, payload: user })
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error })
    }
}

export const getUser = () => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token")).token

    dispatch({ type: GET_USER_REQUEST });
    try {
        const res = await axios.get(`${API_BASE_URL}/api/user/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const user = res.data;
        dispatch({ type: GET_USER_SUCCESS, payload: user });
    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error });
    }
};


export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT, payload: null})
    localStorage.clear();
}