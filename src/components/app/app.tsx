import React from 'react';
import AppHeader from './../app-header/app-header';
import BurgerIngredients from './../burger-ingredients/burger-ingredients';
import BurgerConstructor from './../burger-constructor/burger-constructor';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import styles from './app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <DndProvider backend={HTML5Backend}>
        <AppHeader />
        <main className={styles.main}>
          <BurgerIngredients/>
          <BurgerConstructor />
        </main>   
      </DndProvider>
    </div>
  );
}

export default App;
