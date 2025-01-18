import { Button, Divider } from "@mui/material"
import CartItem from "../cart/CartItem"
import AddressCard from "../deliveryAddressForm/AddressCard"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { getOrderById } from "../../../state/order/Action"
import { createPayment } from "../../../state/payment/Action"

const OrderSummary = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const order = useSelector((state) => state.order.order)

    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get("order_id")

    useEffect(() => {
        dispatch(getOrderById(orderId))
    }, [dispatch, orderId])

    const handlePayment = () => {
        dispatch(createPayment(orderId))
    }

    return (
        <div>
            <div className="p-5 shadow-lg rounded-md border">
                <AddressCard address={order?.data?.order?.shippingAddress}/>
            </div>
            <div className="my-6">
                <div className="lg:grid grid-cols-3 relative">
                    <div className="col-span-2">
                        {order?.data?.order?.orderItems?.map((item) => <CartItem item={item} />)}
                    </div>

                    <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                        <div className="border p-5">
                            <p className="uppercase font-bold opacity-60 pb-4"> Price Details </p>
                            <Divider />
                            <div className="space-y-3 font-semibold">
                                <div className="flex justify-between pt-3 text-black">
                                    <span> Price </span>
                                    <span> ₹{order?.data?.order?.totalPrice} </span>
                                </div>
                                <div className="flex justify-between pt-3 text-black">
                                    <span> Discount </span>
                                    <span className="text-green-600"> -₹{order?.data?.order?.discount} </span>
                                </div>
                                <div className="flex justify-between pt-3 text-black">
                                    <span> Delivery Charges </span>
                                    <span className="text-green-600"> Free </span>
                                </div>
                                <Divider />
                                <div className="flex justify-between pt-3 text-black font-bold">
                                    <span> Total Amount </span>
                                    <span className="text-green-600"> ₹{order?.data?.order?.totalDiscountPrice} </span>
                                </div>
                            </div>
                            <Button variant="contained" sx={{ bgcolor: "blueviolet", mt: "20px", width: "100%" }} onClick={handlePayment}>
                                Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
