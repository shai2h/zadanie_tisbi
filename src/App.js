import React from 'react'
import Login from './component/login';
import Registration from './component/registration';
import './App.css';



const App=()=>{
return(
  <>
  <div className='wrapper'>
    <h1>Регистрация/Авторизация</h1>
   <Login/>
   <Registration/>
  </div>
  </>
)
};

export default App;