import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
;


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route  path='/' element={<HomePage/>}></Route>
        <Route  path='shop' element={<ShopPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
