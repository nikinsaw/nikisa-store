import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<HomePage/>}></Route>
        <Route  path='/shop' element={<ShopPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
