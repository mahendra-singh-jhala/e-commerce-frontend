import { api } from "../../config/api";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./ActionType";

export const createPayment = (amount, currency) => async (dispatch) => {
    dispatch({ type: CREATE_PAYMENT_REQUEST })

    try {
        const data = await api.post("/api/payments/payment", { amount, currency })

        dispatch({
            type: CREATE_PAYMENT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message })
    }
}

export const paymentVerification = (roz_orderId, paymentId, signature, orderId) => async (dispatch) => {
    dispatch({ type: UPDATE_PAYMENT_REQUEST });

    try {
        const data = await api.post("/api/payments/paymentVerify", { roz_orderId, paymentId, signature, orderId })

        dispatch({
            type: UPDATE_PAYMENT_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message });
    }
};