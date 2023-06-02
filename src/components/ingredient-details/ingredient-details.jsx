import React from 'react';
import './ingredient-details.css';
import IngredientPropTypes from '../../utils/ingredients-prop-types';

export default function IngredientDetails ({ingredient}) {
    return (
        <div className='pl-10 pr-10'>
            <h1 className='ingredient_details_header'>Детали ингредиента</h1>
            <div className='ingredient_details'>
                <img src={ingredient.image_large} alt={ingredient.name} />
                <span className="text text_type_main-medium">{ingredient.name}</span>
                <div className='value text text_type_main-default text_color_inactive'>
                    <div className='ingredient_details'><p>Калории, ккал</p> <p>{ingredient.calories}</p></div>
                    <div className='ingredient_details'><p>Белки, г</p> <p>{ingredient.proteins}</p></div>
                    <div className='ingredient_details'><p>Жиры, г</p> <p>{ingredient.fat}</p></div>
                    <div className='ingredient_details'><p>Углеводы, г</p> <p>{ingredient.carbohydrates}</p></div>
                </div>
            </div>
            
        </div>
    );
}

IngredientDetails.propTypes = {
    ingredient: IngredientPropTypes.isRequired
}