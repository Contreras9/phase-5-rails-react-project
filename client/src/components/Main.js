import React from 'react';
import Slider from './Slider';
import Search from './Search';
import PropertyList from './PropertyList';
import Service from './Service';
import Agent from './Agent'
import Footer from './Footer';


function Main( {account, setAccount} ) {

   

   return(
      <>
      <Slider />
      <Search />
      <PropertyList />
      <Service />
      <Agent />
      <Footer />
      </>
   )
}

export default Main;