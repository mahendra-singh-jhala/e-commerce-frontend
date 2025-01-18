import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"
import { api } from "../../config/api";

export const getCart = () => async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST })

    try {
        const res = await api.get("/api/cart")
        dispatch({
            type: GET_CART_SUCCESS, 
            payload: {
                cartItem: res.data.cart.cartItem,  
                cart: res.data.cart, 
            }
        })
    } catch (error) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message })
    }
}

export const addItemToCart = (reqData) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST })
    try {
        const data = await api.put("/api/cart/add", reqData)

        dispatch(getCart());

        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })
    }
}

export const updateCartItem = (cartItemId, quantity) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST });

    try {
        const data = await api.put(`/api/cart/${cartItemId}`, { quantity });

        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });

        dispatch(getCart());
    } catch (error) {
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
    }
};


export const removeCartItem = (cartItemId) => async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST })

    try {
        const data = await api.delete(`/api/cart/${cartItemId}`)

        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: data })

        dispatch(getCart());
    } catch (error) {
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message })
    }
}