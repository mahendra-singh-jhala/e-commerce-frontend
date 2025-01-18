import React, { useEffect } from 'react'
import HomeCarousel from '../../component/carousel/HomeCarousel/HomeCarousel'
import CardCarousel from '../../component/carousel/cardCarousel/CardCarousel'
import { findProducts } from '../../../state/product/Action';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products);

    useEffect(() => {
        const [minPrice, maxPrice] = [0, Infinity];
        const data = {
            category: "",
            color: [],
            sizes: [],
            minPrice,
            maxPrice,
            pageNumber: 1,
            pageSize: 40,
        }
        dispatch(findProducts(data))
    }, [dispatch])

    const categories = ["shirt", "mens_kurta", "men_jeans", "women_dress", "women_jeans", "top"];

    const filterCategory = (categoryName) => {
        return products?.data?.content?.filter((product) => product?.category?.name === categoryName);
    }

    

    return (
        <div>
            <HomeCarousel />

            {categories.map((category) => (
                <div key={category} className="flex flex-col justify-center space-y-10 py-20 px-5 lg:px-10">
                    <CardCarousel data={filterCategory(category)} sectionName={category} />
                </div>
            ))}
        </div>
    )
}

export default HomePage
