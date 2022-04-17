import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';
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



function App() {
  const [account, setAccount] = useState(null)

  return (
    <div>
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
          <Properties/>
        } />
        <Route path="/properties/:propertyTypeParam" element={
          <Properties/>
        } />
        <Route path="/properties" element={
          <Properties/>
        } />
        {/* <Route path="/homes4sale" element={
          <Properties propertyType={1}/>
        } />
        <Route path="/homes4rent" element={
          <Properties propertyType={2}/>
        } /> */}
        <Route path="/propertyDetails" element={
            <PropertyDetails />
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
