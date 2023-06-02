import React from 'react';
import './app-header.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import AppNavigation from '../app-navigation/app-navigation';

export default function AppHeader () {
    return (
        <header className='header'>
            <AppNavigation />
            <div className='logo pt-5'>
                <Logo />
            </div>
        </header>
    );
}