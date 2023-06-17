import { getIngredientsData } from "../apiRequests";

export const GET_INGREDIENTS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_ITEMS_FAILED';

export function getIngredients() {
    return function(dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        });
        getIngredientsData().then(res => {
            if (res) {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    ingredients: res
                });
            } else {
                dispatch({
                    type: GET_INGREDIENTS_FAILED
                });
            }
        });
    };
}