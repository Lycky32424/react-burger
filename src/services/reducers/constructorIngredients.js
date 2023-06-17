import { SELECT_BUN, ADD_INGREDIENT, REMOVE_INGREDIENT, MOVE_INGREDIENT } from "../actions/constructorIngredients";

const initialState = {
    constructorIngredients: [],
    selectedBun: null,
    currentUuid: 1
}

export const constructorIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVE_INGREDIENT: {
            const ingredients = state.constructorIngredients.filter(ingredient => ingredient.uuid !== action.dragIngredient.uuid);
            const index = ingredients.findIndex(ingredient => ingredient.uuid === action.targetIngredient.uuid);
            ingredients.splice(index, 0, action.dragIngredient);
            return {
                ...state,
                constructorIngredients: ingredients
            }
        }
        case REMOVE_INGREDIENT: {
            return {
                ...state,
                constructorIngredients: state.constructorIngredients.filter(ingredient => ingredient.uuid !== action.id)
            }

        }
        case ADD_INGREDIENT: {
            return {
                ...state,
                constructorIngredients: [...state.constructorIngredients, {ingredient: action.ingredient, uuid: state.currentUuid}],
                currentUuid: state.currentUuid + 1
            }
        }
        case SELECT_BUN: {
            return {
                ...state,
                selectedBun: action.selectedBun
            }
        }
        default: {
          return state;
        }
      }
};