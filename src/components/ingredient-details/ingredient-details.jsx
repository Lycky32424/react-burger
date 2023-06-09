import React from 'react';
import styles from './ingredient-details.module.css';
import { useSelector } from 'react-redux';

export default function IngredientDetails () {
    const { currentIngredient } = useSelector(state => state.currentIngredient);

    return (
        <div className='pl-10 pr-10'>
            <h1 className={styles.ingredient_details_header}>Детали ингредиента</h1>
            <div className={styles.ingredient_details}>
                <img src={currentIngredient.image_large} alt={currentIngredient.name} />
                <span className="text text_type_main-medium">{currentIngredient.name}</span>
                <div className={`${styles.value} text text_type_main-default text_color_inactive`}>
                    <div className={styles.ingredient_details}><p>Калории, ккал</p> <p>{currentIngredient.calories}</p></div>
                    <div className={styles.ingredient_details}><p>Белки, г</p> <p>{currentIngredient.proteins}</p></div>
                    <div className={styles.ingredient_details}><p>Жиры, г</p> <p>{currentIngredient.fat}</p></div>
                    <div className={styles.ingredient_details}><p>Углеводы, г</p> <p>{currentIngredient.carbohydrates}</p></div>
                </div>
            </div>
            
        </div>
    );
}
