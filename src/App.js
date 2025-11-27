import './App.css';
import { BrowserRouter } from 'react-router';
import AppRouter from './router/MyRouter';
import MyNavbar from './components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { saveCartToLocalStorage } from './localStorage/helpers';
function App() {
  const cartState = useSelector(state => state.cart)

  useEffect(() => {
    saveCartToLocalStorage(cartState);
  }, [cartState])

  return (
    <BrowserRouter>
      <MyNavbar />
      <div>
        <AppRouter />
      </div>
    </BrowserRouter>

  );
}

export default App;
