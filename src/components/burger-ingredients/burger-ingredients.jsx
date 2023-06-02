import React from 'react';
import IngredientsTab from '../ingredients-tab/ingredients-tab';
import IngredientCard from '../ingridient-card/ingridient-card';
import Modal from '../modal/modal';
import './burger-ingredients.css';
import IngredientDetails from '../ingredient-details/ingredient-details';
import IngredientPropTypes from '../../utils/ingredients-prop-types';
import PropTypes from "prop-types";

export default function BurgerIngredients ({allIngredients}) {
    const [isModalOpen, toggleModal] = React.useState(false);
    const [currentIngredient, setCurrentIngredient] = React.useState({});

    const openModal = (ingredient) => {
        setCurrentIngredient(ingredient);
        toggleModal(true);
    }

    const closeModal = () => {
        toggleModal(false);
    }

    return (
        <>
        <div>
            <h1>
                Соберите бургер
            </h1>
            <IngredientsTab />
            <div className='custom-scroll ingredients_list'>
                <h2>Булки</h2>
                <div className='ingredient_type_list'>
                {allIngredients.map((ingredient) => {
                    if (ingredient.type === 'bun') {
                        return <IngredientCard ingredient={ingredient} key={ingredient._id} onClick={() => openModal(ingredient)} />
                    }
                })}
                </div>
                <h2>Соусы</h2>
                <div className='ingredient_type_list'>
                {allIngredients.map((ingredient) => {
                    if (ingredient.type === 'sauce') {
                        return <IngredientCard ingredient={ingredient} key={ingredient._id} onClick={() => openModal(ingredient)}/>
                    }
                })}
                </div>
                <h2>Начинки</h2>
                <div className='ingredient_type_list'>
                {allIngredients.map((ingredient) => {
                    if (ingredient.type === 'main') {
                        return <IngredientCard ingredient={ingredient} key={ingredient._id} onClick={() => openModal(ingredient)}/>
                    }
                })}
                </div>
            </div>
        </div>
        { isModalOpen && <Modal onClose={closeModal}>
            <IngredientDetails ingredient={currentIngredient}/>
        </Modal> }
        </>
    );
}

BurgerIngredients.propTypes = {
    allIngredients: PropTypes.arrayOf(IngredientPropTypes.isRequired).isRequired
};