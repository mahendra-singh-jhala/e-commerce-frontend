import { Alert, AlertTitle} from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getOrderById } from '../../../state/order/Action'
import { updatePayment } from '../../../state/payment/Action'
import { useLocation, useParams } from 'react-router-dom'

const PaymentSuccess = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const orderId = useParams()

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const paymentId = urlParams.get('razorpay_payment_id');

        if (orderId) {
            dispatch(updatePayment(orderId?.orderId, paymentId))
            dispatch(getOrderById(orderId?.orderId))
        } 
    }, [dispatch, location.search]);


    return (
        <div className="px-2 lg:px-36">
            <div className="flex flex-col justify-center items-center">
                <Alert
                    variant="filled"
                    severity="success"
                    sx={{ mb:6, width: "fit-content" }}
                >
                    <AlertTitle> Payment Success</AlertTitle>
                    Your Order Get Placed
                </Alert>
            </div>
        </div>
    )
}

export default PaymentSuccess
