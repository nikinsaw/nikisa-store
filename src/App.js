import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';



function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route  path='/' element={<HomePage/>}></Route>
        <Route  path='shop' element={<ShopPage/>}></Route>
        <Route  path='signin' element={<SignInAndSignUpPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
