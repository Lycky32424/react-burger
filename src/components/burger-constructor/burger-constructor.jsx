import React from 'react';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import './burger-constructor.css';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { SET_TOTAL_COST, CLEAR_ORDER } from '../../services/actions/order'; 
import { OPEN_MODAL, CLOSE_MODAL } from '../../services/actions/toggleModal';
import { postOrder } from '../../services/actions/order';
import { useDrop } from 'react-dnd';
import BurgerConstructorIngredient from '../burger-constructor-ingredient/burger-constructor-ingredient';
import { ADD_INGREDIENT, SELECT_BUN, REMOVE_INGREDIENT } from '../../services/actions/constructorIngredients';

export default function BurgerConstructor () {
    const dispatch = useDispatch();
    const { constructorIngredients, selectedBun } = useSelector(state => state.constructorIngredients);
    const { order, totalCost } = useSelector(state => state.order);
    const { isModalOpened } = useSelector(state => state.toggleModal);

    const [, dropTarget] = useDrop({
        accept: ['main', 'sauce', 'bun'],
        drop(ingredient) {
            if(ingredient.type === "bun") {
                dispatch({
                    type: SELECT_BUN,
                    selectedBun: ingredient
                })
            } else {
                dispatch({
                    type: ADD_INGREDIENT,
                    ingredient: ingredient
                })
            }
        }
    });

    const removeIngredient = (ingredientId) => {
        dispatch({
            type: REMOVE_INGREDIENT,
            id: ingredientId
        });
    }

    const openModal = () => {
        const orderIds = constructorIngredients.map(ingredient => ingredient.ingredient._id)
        dispatch(postOrder([selectedBun._id, ...orderIds, selectedBun._id]));
        dispatch({
            type: OPEN_MODAL
        });
    }

    const closeModal = () => {
        dispatch({
            type: CLEAR_ORDER
        });
        dispatch({
            type: CLOSE_MODAL
        });
    }

    const ingredients = React.useMemo(
        () => {
            return !constructorIngredients.length ?
            [] :
            constructorIngredients.map((ingredient) => {
                return (
                    <BurgerConstructorIngredient ingredient={ingredient} removeIngredient={removeIngredient} key={ingredient.uuid}/>
                );
            })
        }, [constructorIngredients]
    );

    React.useEffect(
        () => {
            const ingredientsPrice = !constructorIngredients.length ?
            0 : constructorIngredients.map(ingredient => ingredient.ingredient.price).reduce((sum, elem) => sum + elem, 0);
            dispatch({
                type: SET_TOTAL_COST,
                totalCost: ((selectedBun ? selectedBun.price*2 : 0) + ingredientsPrice)
            })
        },
        [constructorIngredients, selectedBun, dispatch]
    );

    return(
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className='mt-20' ref={dropTarget}>
                {selectedBun && (<ConstructorElement
                    type="top"
                    isLocked={true}
                    text={selectedBun.name + `\n (верх)`}
                    price={selectedBun.price}
                    thumbnail={selectedBun.image_mobile}
                    extraClass='ml-6'
                    key={selectedBun._id+1}
                />)}
                <div className='custom-scroll burger_constructor_list'> 
                    <ul className='ul_burger_constructor pr-2'>
                        {ingredients}
                    </ul>
                </div>
                {selectedBun && (<ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={selectedBun.name + `\n (низ)`}
                    price={selectedBun.price}
                    thumbnail={selectedBun.image_mobile}
                    extraClass='ml-6'
                    key={selectedBun._id}
                />)}
            </div>
            <div className='total_cost'>
                <span>{totalCost}</span>
                <CurrencyIcon type="primary" />
                <Button htmlType="button" type="primary" size="medium" extraClass="ml-2" onClick={openModal}>
                    Нажми на меня
                </Button>
            </div>
            <div>
                {isModalOpened && order && <Modal onClose={closeModal}>
                        <OrderDetails />
                    </Modal>}
            </div>
        </div>
    );
}
