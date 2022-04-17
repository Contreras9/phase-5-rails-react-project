import React, { useEffect } from 'react';
import Header from './Header'
import Navbar from './Navbar';
import Slider from './Slider';
import Search from './Search';
import PropertyList from './PropertyList';
import Service from './Service';
import Agent from './Agent'
import Footer from './Footer';


function Main( {account, setAccount} ) {

   useEffect(() => {
      fetch("http://localhost:4001/authorized_account", {
         method:"GET",
         headers: {
            "Content-type": "application/json"
         }
      })
      .then(res => res.json())
      .then(res => {
         setAccount(res)
      })
   }, [])

   return(
      <>
      <Header account={account} setAccount={setAccount} />
      <Navbar />
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