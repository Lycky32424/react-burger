import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import './ingridient-card.css';
import PropTypes from "prop-types";

export default function IngredientCard ({ingredient, onClick}) {
    return (
        <div className='ingridient_card' onClick={onClick}>
            <img src={ingredient.image} alt={ingredient.name} />
            <div className='card_price'>
                {ingredient.price}
                <CurrencyIcon type="primary" />
            </div>
            <span>{ingredient.name}</span>
            <div className='card_counter'>
                <Counter count={1} size="default" extraClass="m-1" />
            </div>
        </div>
    );
}

IngredientCard.propTypes = {
    ingredient: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}