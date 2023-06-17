import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux';
import { SET_MAINS_TAB, SET_SAUCES_TAB, SET_BUNS_TAB } from '../../services/actions/ingredientsTabs';

export default function IngredientsTab () {
    const dispatch = useDispatch();
    const { currentTab } = useSelector(state => state.ingredients);
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

    return (
        <div style={{ display: 'flex' }}>
            <Tab value="buns" active={currentTab === 'buns'} onClick={setBunsTab}>
                Булки
            </Tab>
            <Tab value="sauces" active={currentTab === 'sauces'} onClick={setSaucesTab}>
                Суосы
            </Tab>
            <Tab value="main" active={currentTab === 'main'} onClick={setMainsTab}>
                Начинки
            </Tab>
        </div>
    );
}