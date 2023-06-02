import React from 'react';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import BurgerConstructor from './components/burger-constructor/burger-constructor';

import './App.css';

function App() {
  const [state, setState] = React.useState({
    productData: [],
    loading: true
  });
  const apiLinc = "https://norma.nomoreparties.space/api/ingredients";

  React.useEffect(() => {
    const getProductData = async () => {
      setState({...state, loading: true});
      try {
        const data = await fetch(apiLinc).then(res => {if (res.ok) {
          return res.json(); 
        } else { return Promise.reject(res.status) }
        })
        setState({productData: data.data, loading: false});
      } catch (error) {
        throw new Error('Ошибка: ${error}');
      }
    }
    getProductData();
  }, []);
 
  return (
    <div className="App">
      <AppHeader />
      <main className='main'>
        { !state.loading && <BurgerIngredients allIngredients={state.productData}/>}
        { !state.loading && <BurgerConstructor allIngredients={state.productData} />}
      </main>    
    </div>
  );
}

export default App;
