import logo from './logo.svg';
import './App.css';
import Register from './components/register/reg';
import Login from './components/login/login';
import Home from './components/home/home';
import { BrowserRouter, Route, Router,Routes } from 'react-router-dom';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
