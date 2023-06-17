import React from 'react';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import './App.css';

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <AppHeader />
        <main className='main'>
          <BurgerIngredients/>
          <BurgerConstructor />
        </main>   
      </DndProvider>
    </div>
  );
}

export default App;
