import React from 'react';
import styles from './app-header.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import AppNavigation from '../app-navigation/app-navigation';

export default function AppHeader () {
    return (
        <header className={styles.header}>
            <AppNavigation />
            <div className={`${styles.logo} pt-5`}>
                <Logo />
            </div>
        </header>
    );
}