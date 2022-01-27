import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/hompage/homepage.component';


const WatchesPage = () => (
  <div>
    <h1>WATCHES PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<HomePage/>}></Route>
        <Route  path='/watches' element={<WatchesPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
