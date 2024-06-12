import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Home from '../pages/home/Home';
import { Outlet } from 'react-router-dom';
 
  
 

const Main = () => {
  return (
    <div>
      <NavBar/>
      <main>
      <Outlet/>
      </main>
    
      <Footer/>
   
 
   
    </div>
  );
}

export default Main;
