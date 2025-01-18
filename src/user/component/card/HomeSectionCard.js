import { useNavigate } from 'react-router-dom';

const HomeSectionCard = ({ product }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/product/${product._id}`); 
    }

    return (
        <div onClick={handleClick} className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[240px] mx-3 border border-gray-400">
            <div className="h-[205px] w-[160px] ">
                <img className="object-cover object-top w-full h-full" src={product.imageUrl} alt="" />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
                <p className="mt-2 text-sm text-gray-600">{product.title}</p>
            </div>

        </div>
    )
}

export default HomeSectionCard
