import React from 'react';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import './burger-constructor.css';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import PropTypes from "prop-types";
import IngredientPropTypes from '../../utils/ingredients-prop-types';

export default function BurgerConstructor ({allIngredients}) {
    const [isModalOpen, toggleModal] = React.useState(false);

    const openModal = () => {
        toggleModal(true);
    }

    const closeModal = () => {
        toggleModal(false);
    }

    const bun = allIngredients.filter((ingredient) => {
        return ingredient.type === 'bun';
    });
    const ingredients = allIngredients.map((ingredient) => {
        if (ingredient.type !== 'bun')
        return (<li className='li_constructor_ingredient'>
            <DragIcon type="primary"/>
            <ConstructorElement
                            text={ingredient.name}
                            price={ingredient.price}
                            thumbnail={ingredient.image_mobile}
                            key={ingredient._id}
                        />
        </li>);
    });

    return(
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className='mt-20'>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={bun[0].name}
                    price={bun[0].price}
                    thumbnail={bun[0].image_mobile}
                    extraClass='ml-6'
                    key={bun._id}
                />
                <div className='custom-scroll burger_constructor_list'> 
                    <ul className='ul_burger_constructor pr-2'>
                        {ingredients}
                    </ul>
                </div>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={bun[0].name}
                    price={bun[0].price}
                    thumbnail={bun[0].image_mobile}
                    extraClass='ml-6'
                    key={bun._id}
                />
            </div>
            <div className='total_cost'>
                <span>9999</span>
                <CurrencyIcon type="primary" />
                <Button htmlType="button" type="primary" size="medium" extraClass="ml-2" onClick={openModal}>
                    Нажми на меня
                </Button>
            </div>
            <div>
                {isModalOpen && <Modal onClose={closeModal}>
                        <OrderDetails />
                    </Modal>}
            </div>
        </div>
    );
}

BurgerConstructor.propTypes = {
    allIngredients: PropTypes.arrayOf(IngredientPropTypes.isRequired).isRequired
};
