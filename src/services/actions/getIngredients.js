import { prerareRequest } from "../apiRequests";

export const GET_INGREDIENTS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_ITEMS_FAILED';

export function getIngredients() {
    return function(dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        });
        prerareRequest("ingredients").then(res => {
            if (res.data) {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    ingredients: res.data
                });
            } else {
                dispatch({
                    type: GET_INGREDIENTS_FAILED
                });
            }
        }).catch((error) => {
            throw new Error(`Ошибка ${error}`);
        });
    };
}