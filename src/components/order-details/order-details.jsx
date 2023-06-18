import React from 'react';
import image from '../../images/graphics.png';
import styles from './order-details.module.css';
import { useSelector } from 'react-redux';


export default function OrderDetails () {
    const { order } = useSelector(state => state.order);

    return (
        <div className={styles.order_details}>
            <p className="text text_type_digits-large mt-6">{order}</p>
            <p className="text text_type_main-medium mb-8">
                идентификатор заказа
            </p>
            <img src={image} alt='заказ создан'/>
            <p className="text text_type_main-default mt-15 mb-2">
                Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-default text_color_inactive">
                Дождитесь готовности на орбитальной станции
            </p>
        </div>
    );
}