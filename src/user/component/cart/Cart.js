import { Button, Divider } from "@mui/material"
import CartItem from "./CartItem"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../../state/cart/Action";

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cart)
    const cartItem = cart?.cartItem
    
    // useEffect to fetch cart data
    useEffect(() => {
        dispatch(getCart())
    }, [dispatch])

    // Function to handle checkout action (navigate to step==2)
    const handleCheckout = () => {
        navigate("/checkout?step=2")
    }

    return (
        <div className="my-6">
            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                <div className="col-span-2">
                    {cartItem?.map((item) => <CartItem key={item._id} item={item} />)}
                </div>

                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                    <div className="border p-5">
                        <p className="uppercase font-bold opacity-60 pb-4"> Price Details </p>
                        <Divider />
                        <div className="space-y-3 font-semibold">
                            <div className="flex justify-between pt-3 text-black">
                                <span> Price </span>
                                <span> ₹{cart?.totalPrice} </span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span> Discount </span>
                                <span className="text-green-600"> -₹{cart?.discount} </span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span> Delivery Charges </span>
                                <span className="text-green-600"> Free </span>
                            </div>
                            <Divider />
                            <div className="flex justify-between pt-3 text-black font-bold">
                                <span> Total Amount </span>
                                <span className="text-green-600"> ₹{cart?.totalDiscountPrice} </span>
                            </div>
                        </div>
                        <Button onClick={handleCheckout} variant="contained" sx={{ bgcolor: "blueviolet", mt: "20px", width: "100%" }}>
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Cart
