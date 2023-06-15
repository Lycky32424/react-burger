import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

export default function IngredientsTab () {
    const [current, setCurrent] = React.useState('buns')
    return (
        <div style={{ display: 'flex' }}>
            <Tab value="buns" active={current === 'buns'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
                Суосы
            </Tab>
            <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    );
}