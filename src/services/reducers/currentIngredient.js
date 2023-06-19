import { REMOVE_CURRENT_INGREDIENT, ADD_CURRENT_INGREDIENT } from "../actions/currentIngredient";

const initialState = {
    currentIngredient: null
}

export const currentIngredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CURRENT_INGREDIENT: {
            return {
                ...state,
                currentIngredient: action.currentIngredient
            }
        }
        case REMOVE_CURRENT_INGREDIENT: {
            return {
                ...state,
                currentIngredient: null
            }
        }
        default: {
          return state;
        }
      }
};