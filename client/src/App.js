import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import Properties from "./components/Properties";
import PropertyDetails from "./components/PropertyDetails";
import Dashboard from "./components/Dashboard";
import Sidebar from './components/Sidebar';
import MyProperty from './components/MyProperty'
import MyPropertiesForm from './components/MyPropertiesForm';
import './App.css'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Map from './components/Map';



function App() {
  const [account, setAccount] = useState(null)

  useEffect(() => {
    fetch("http://localhost:4001/authorized_account", {
       method:"GET",
       headers: {
          "Content-Type": "application/json"
       }
    })
    .then(res => res.json())
    .then(res => {
       setAccount(res)
    })
 }, [])



  return (
    <div>
      <Header account={account} setAccount={setAccount} />
      <Navbar />
      <Routes>
        <Route path="/login" element={
          <Login setAccount={setAccount} />
        } />
        <Route path="/signup" element={
          <Signup setAccount={setAccount} />
        } />
        <Route path="/" element={
          <Main account={account} setAccount={setAccount} />
        } />
        <Route path="/properties/:propertyTypeParam/:locationSearch" element={
          <Properties account={account} setAccount={setAccount} />
        } />
        <Route path="/properties/:propertyTypeParam" element={
          <Properties account={account} setAccount={setAccount} />
        } />
        <Route path="/properties" element={
          <Properties account={account} setAccount={setAccount} />
        } />
        {/* <Route path="/homes4sale" element={
          <Properties propertyType={1}/>
        } />
        <Route path="/homes4rent" element={
          <Properties propertyType={2}/>
        } /> */}
        <Route path="/propertyDetails/:id" element={
            <PropertyDetails account={account} setAccount={setAccount} />
          } /> 
        <Route path="/dashboard" element={
            <Dashboard />
        } />
         <Route path="/sideBar" element={
            <Sidebar />
        } />
        <Route path="/myproperty" element={
            <MyProperty />
        } />
        <Route path="/mypropertiesform" element={
            <MyPropertiesForm />
        } />
      </Routes>
    </div>
  );
}

export default App;
