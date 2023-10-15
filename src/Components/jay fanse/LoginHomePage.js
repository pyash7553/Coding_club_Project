import React from 'react'
import Greeting from './Greeting';
import NewTasks from './NewTasks';
import NewUpdates from './NewUpdates';
import "./LoginHomePage.css";
import Navbar_after_login from '../kaushal/Navbar_after_login';
import Contest_main from '../Contest components/Contest_main';
import Myfooter from '../Myfooter';

function LoginHomePage() {
  return (
    
    <>
    <Navbar_after_login/>
    <div className='background-color-LoginHome'>
        
        <Greeting/>
        <NewTasks/>
        <NewUpdates/>
    </div>
    <Myfooter/>
    </>
  )
}

export default LoginHomePage;