import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingridient-card.module.css';
import PropTypes from "prop-types";
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';

export default function IngredientCard ({ingredient, onClick}) {
    const { constructorIngredients, selectedBun } = useSelector(state => state.constructorIngredients);

    const [{opacity}, ref] = useDrag({
        type: ingredient.type,
        item: {...ingredient},
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    });

    const count = React.useMemo(
        () => {
            if (selectedBun) {
                if(ingredient.type === "bun") {
                    return ingredient._id === selectedBun._id ? 2 : null;
                } else {
                    const itemsCount = constructorIngredients.filter(item => item.ingredient._id === ingredient._id).length;
                    return itemsCount > 0 ? itemsCount : null;
                }
            }
            return null;
            
        },
        [constructorIngredients, selectedBun]
    );

    return (
        <div className={styles.ingridient_card} onClick={onClick} ref={ref} style={{opacity}}>
            <img src={ingredient.image} alt={ingredient.name} />
            <div className={styles.card_price}>
                {ingredient.price}
                <CurrencyIcon type="primary" />
            </div>
            <span>{ingredient.name}</span>
            {count && <div className={styles.card_counter}>
                <Counter count={count} size="default" extraClass="m-1" />
            </div>}
        </div>
    );
}

IngredientCard.propTypes = {
    ingredient: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}