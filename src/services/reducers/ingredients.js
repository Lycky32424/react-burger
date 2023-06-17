import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from "../actions/getIngredients";
import { SET_MAINS_TAB, SET_SAUCES_TAB, SET_BUNS_TAB } from "../actions/ingredientsTabs";

const initialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed:false,
    currentTab: 'buns'
  };

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUNS_TAB: {
      return {
        ...state,
        currentTab: 'buns'
      }
    }
    case SET_SAUCES_TAB: {
      return {
        ...state,
        currentTab: 'sauces'
      }
    }
    case SET_MAINS_TAB: {
      return {
        ...state,
        currentTab: 'main'
      }
    }
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        ingredientsFailed: false,
        ingredientsRequest: false
      }
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false,
        ingredients: []
      }
    }
    default: {
      return state;
    }
  }
};