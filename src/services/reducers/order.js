import { 
    SET_TOTAL_COST,
    POST_ORDER_FAILED,
    POST_ORDER_SUCCESS,
    POST_ORDER_REQUEST,
    CLEAR_ORDER
 } from "../actions/order";

const initialState = {
    order: null,
    totalCost: 0,
    orderRequest: false,
    orderFailed: false
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_ORDER: {
            return {
                ...state,
                order: null
            }
        }
        case SET_TOTAL_COST: {
            return {
                ...state,
                totalCost: action.totalCost
            }
        }
        case POST_ORDER_REQUEST: {
            return {
                ...state,
                orderRequest: true
            }
        }
        case POST_ORDER_SUCCESS: {
            return {
                ...state,
                orderRequest: false,
                orderFailed: false,
                order: action.order.order.number
            }
        }
        case POST_ORDER_FAILED: {
            return {
                ...state,
                orderRequest: false,
                orderFailed: true,
                order: null
            }
        }
        default: {
          return state;
        }
      }
};