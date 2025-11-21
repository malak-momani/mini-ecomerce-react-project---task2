import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router';
import AppRouter from './router/MyRouter';
import MyNavbar from './components/Navbar/Navbar';
function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Header />
      <div>
        <AppRouter />
      </div>
    </BrowserRouter>

  );
}

export default App;
