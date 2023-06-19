import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { constructorIngredientsReducer } from './constructorIngredients';
import { currentIngredientReducer } from './currentIngredient'; 
import { orderReducer } from './order';
import { toggleModalReducer } from './toggleModal';


  

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    constructorIngredients: constructorIngredientsReducer,
    currentIngredient: currentIngredientReducer,
    order: orderReducer,
    toggleModal: toggleModalReducer
  });