import { prerareRequest } from "../apiRequests";

export const SET_TOTAL_COST = 'SET_TOTAL_COST';

export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILED = 'POST_ORDER_FAILED';

export const CLEAR_ORDER = 'CLEAR_ORDER';

const postData = (ingredients) => {
    return {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ingredients: ingredients,
      }),
    };
  };

export function postOrder(ingredients) {
    return function(dispatch) {
        dispatch({
            type: POST_ORDER_REQUEST
        });
        prerareRequest("orders", postData(ingredients)).then(res => {
            if(res) {
                dispatch({
                    type: POST_ORDER_SUCCESS,
                    order: res
                });
            } else {
                dispatch({
                    type: POST_ORDER_FAILED
                });
            }
        }).catch((error) => {
            throw new Error(`Ошибка ${error}`);
        });
    };
}
