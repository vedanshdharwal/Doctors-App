import React from 'react';
import NavBarMenu from './NavBarMenu'
import {
    Redirect 
  } from 'react-router-dom';
const Logout = () => {
    console.log('hi')
    localStorage.clear();
    return (
        <div>
            <Redirect to="/login" />
        </div>
        
    );
}
export default Logout;