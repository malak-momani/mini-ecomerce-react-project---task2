import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './app/store';

const saveCartToLocalStorage = (state) => {
  try {
    const toSave = JSON.stringify(state.cart);
    localStorage.setItem('cart', toSave)
  } catch (error) {
    console.log('Could not save cart', error)

  }
  // MAKE IT AS STATE
  let currentCart;
  store.subscribe(() => {
    const prev = currentCart;
    currentCart = store.getState().cart;
    if (prev !== currentCart) {
      saveCartToLocalStorage(currentCart)
    }
  })
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
