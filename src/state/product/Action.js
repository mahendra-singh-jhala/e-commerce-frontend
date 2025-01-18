import { api } from "../../config/api";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";

export const createProduct = (productData) => async (dispatch) => {
    dispatch({ type: CREATE_PRODUCT_REQUEST })

    try {
        const data = await api.post("/api/products", productData)

        dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message})
    }
}

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCTS_REQUEST})
    const {color, sizes, minPrice, maxPrice, category, sort, pageNumber, pageSize} = reqData;

    try {
        const data = await api.get(`/api/products?category=${category}&color=${color}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
    
        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message})
    }
}

export const findProductsById = (productId) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST})
    try {
        const data = await api.get(`/api/products/id/${productId}`)
    
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message})
    }
}

export const deleteProduct = (productId) => async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_REQUEST})
    try {
        const data = await api.delete(`/api/products/${productId}`)
    
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message})
    }
}


