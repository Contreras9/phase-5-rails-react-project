import './App.css';
import { Route, Routes } from "react-router-dom"
import { useState } from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';


function App() {
  const [account, setAccount] = useState(null)

  return (
    <div>
      <Navbar account={account} />
      <Routes>
        <Route path="/login" element={
          <Login setAccount={setAccount} />
        } />
        <Route path="/" element={
          <Main />
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
