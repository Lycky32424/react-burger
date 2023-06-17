import React from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import './burger-constructor-ingredient.css';
import { useDrop, useDrag } from 'react-dnd';
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { MOVE_INGREDIENT } from '../../services/actions/constructorIngredients';

export default function BurgerConstructorIngredient ({ingredient, removeIngredient}) {
    const dispatch = useDispatch()
    const [{opacity}, dragRef] = useDrag({
        type: 'constructorIngredient',
        item: {...ingredient},
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.1 : 1
        })
    });

    const [{ isHover }, dropTarget] = useDrop({
        accept: 'constructorIngredient',
        drop(dragIngredient) {
            if(dragIngredient.uuid === ingredient.uuid) {
                return;
            } else {
                dispatch({
                    type: MOVE_INGREDIENT,
                    dragIngredient: dragIngredient,
                    targetIngredient: ingredient
                })
            }
        },
        collect: monitor => ({
            isHover: monitor.isOver()
        })
    })

    const className = `${isHover ? 'hover' : ''}`;

    return (
        <li  key={ingredient.uuid} ref={dropTarget} className={className}>
            <div className='li_constructor_ingredient' ref={dragRef} style={{opacity}}>
                <DragIcon type="primary"/>
                <ConstructorElement
                            text={ingredient.ingredient.name}
                            price={ingredient.ingredient.price}
                            thumbnail={ingredient.ingredient.image_mobile}
                            handleClose={() => removeIngredient(ingredient.uuid)}
                        />
            </div> 
        </li>
    );
}

BurgerConstructorIngredient.propTypes = {
    ingredient: PropTypes.object.isRequired,
    removeIngredient: PropTypes.func.isRequired
}