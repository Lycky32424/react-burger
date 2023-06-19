import React from 'react';
import IngredientsTab from '../ingredients-tab/ingredients-tab';
import IngredientCard from '../ingridient-card/ingridient-card';
import Modal from '../modal/modal';
import styles from './burger-ingredients.module.css';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/getIngredients';
import { ADD_CURRENT_INGREDIENT, REMOVE_CURRENT_INGREDIENT } from '../../services/actions/currentIngredient';
import { OPEN_MODAL, CLOSE_MODAL } from '../../services/actions/toggleModal';
import { SET_MAINS_TAB, SET_SAUCES_TAB, SET_BUNS_TAB } from '../../services/actions/ingredientsTabs';


export default function BurgerIngredients () {
    const dispatch = useDispatch();
    const { ingredients, ingredientsRequest } = useSelector(state => state.ingredients);
    const { currentIngredient } = useSelector(state => state.currentIngredient);
    const { isModalOpened } = useSelector(state => state.toggleModal);

    React.useEffect(
        () => {
          dispatch(getIngredients());
        },
        [dispatch]
    );

    const buns = React.useMemo(
        () => {
            return ingredientsRequest ? 
            [] :
            ingredients.map((ingredient) => {
                if (ingredient.type === 'bun') {
                    return (<IngredientCard ingredient={ingredient} key={ingredient._id} onClick={() => openModal(ingredient)} />)
                }
            })
        },
        [ingredientsRequest, ingredients]
    );

    const sauces = React.useMemo(
        () => {
            return ingredientsRequest ?
            [] :
            ingredients.map((ingredient) => {
                if (ingredient.type === 'sauce') {
                    return (<IngredientCard ingredient={ingredient} key={ingredient._id} onClick={() => openModal(ingredient)} />)
                }
            })
        },
        [ingredientsRequest, ingredients]
    );

    const mains = React.useMemo(
        () => {
            return ingredientsRequest ?
            [] :
            ingredients.map((ingredient) => {
                if (ingredient.type === 'main') {
                    return (<IngredientCard ingredient={ingredient} key={ingredient._id} onClick={() => openModal(ingredient)}/>)
                }
            })
        },
        [ingredientsRequest, ingredients]
    );

    const openModal = (ingredient) => {
        dispatch({
            type: ADD_CURRENT_INGREDIENT,
            currentIngredient: ingredient
        });
        dispatch({
            type: OPEN_MODAL
        });
    }

    const closeModal = () => {
        dispatch({
            type: REMOVE_CURRENT_INGREDIENT
        });
        dispatch({
            type: CLOSE_MODAL
        });
    }

    const setBunsTab = () => {
        dispatch({
            type: SET_BUNS_TAB
        });
    }
    const setSaucesTab = () => {
        dispatch({
            type: SET_SAUCES_TAB
        });
    }
    const setMainsTab = () => {
        dispatch({
            type: SET_MAINS_TAB
        });
    }

    const containerRef = React.useRef();
    const bunsRef = React.useRef();
    const saucesRef = React.useRef();
    const mainsRef = React.useRef();
    const onScroll = () => {
        if (containerRef.current.getBoundingClientRect().top >
            bunsRef.current.getBoundingClientRect().top) {
                setBunsTab();
        }
      
        if (containerRef.current.getBoundingClientRect().top >
            saucesRef.current.getBoundingClientRect().top) {
                setSaucesTab();
        }
      
        if (containerRef.current.getBoundingClientRect().top >
            mainsRef.current.getBoundingClientRect().top) {
                setMainsTab();
        }
    }

    return (
        <>
        <div>
            <h1>
                Соберите бургер
            </h1>
            <IngredientsTab />
            <div className={`custom-scroll ${styles.ingredients_list}`} onScroll={onScroll} ref={containerRef}>
                <h2 ref={bunsRef}>Булки</h2>
                <div className={styles.ingredient_type_list}>
                {buns}
                </div>
                <h2 ref={saucesRef}>Соусы</h2>
                <div className={styles.ingredient_type_list}>
                {sauces}
                </div>
                <h2 ref={mainsRef}>Начинки</h2>
                <div className={styles.ingredient_type_list}>
                {mains}
                </div>
            </div>
        </div>
        { isModalOpened && currentIngredient && (<Modal onClose={closeModal}>
            <IngredientDetails />
        </Modal>) }
        </>
    );
}
