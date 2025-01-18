import Grid from "@mui/material/Grid2"
import OrderCard from "./OrderCard"
import { useDispatch, useSelector } from "react-redux"
import { getUserOrder } from "../../../state/order/Action"
import { useEffect } from "react"

const Order = () => {
    const order = useSelector((state) => state.order.orders)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserOrder())
    }, [dispatch])

    return (
        <div className="px-5 lg:px-20 mt-10">
            <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid size={{ xs: 12 }}>
                    <div className="space-y-5">
                        {order?.data?.orders?.map((item) => <OrderCard key={item._id} item={item} />)}
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default Order
