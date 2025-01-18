import { 
    CREATE_PAYMENT_REQUEST, 
    CREATE_PAYMENT_SUCCESS, 
    CREATE_PAYMENT_FAILURE, 
    UPDATE_PAYMENT_REQUEST, 
    UPDATE_PAYMENT_SUCCESS, 
    UPDATE_PAYMENT_FAILURE 
} from './ActionType';

// Initial State
const initialState = {
    paymentStatus: null,
    success: false,  
    loading: false,       
    error: null,          
};

export const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PAYMENT_REQUEST:
        case UPDATE_PAYMENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        
        case CREATE_PAYMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                paymentStatus: action.payload
            };
        
        case CREATE_PAYMENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case UPDATE_PAYMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                paymentStatus: action.payload
            };
        
        case UPDATE_PAYMENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}