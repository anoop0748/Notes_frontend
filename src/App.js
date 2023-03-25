
import './App.css';
import Register from './components/register/reg';
import Login from './components/login/login';
import Home from './components/home/home';
import { BrowserRouter, Route, Router,Routes } from 'react-router-dom';
import AddEvent from './components/addEvent/event';
import UpdateEvent from './updatesEvent/updateevent';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/event' element={<AddEvent/>}/>
          <Route path='/updateEvent' element={<UpdateEvent/>}/>
        </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
