import { api } from "../../config/api";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./ActionType";

export const createPayment = (orderId) => async (dispatch) => {
    dispatch({ type: CREATE_PAYMENT_REQUEST })

    try {
        const data = await api.post(`/api/payments/${orderId}`)

        if (data?.data?.payment_link_url) {
            window.location.href = data?.data?.payment_link_url;
            dispatch({
                type: CREATE_PAYMENT_SUCCESS,
                payload: data
            })
        }
    } catch (error) {
        dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message})
    }
}

export const updatePayment = (orderId, paymentId) => async (dispatch) => {
    dispatch({ type: UPDATE_PAYMENT_REQUEST });

    try {
        const data = await api.put("/api/payments/payment", { orderId, paymentId})
        
        const paymentStatus = data?.data?.order?.paymentDetails?.paymentStatus
        dispatch({
            type: UPDATE_PAYMENT_SUCCESS,
            payload: paymentStatus,
        });

    } catch (error) {
        dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message });
    }
};