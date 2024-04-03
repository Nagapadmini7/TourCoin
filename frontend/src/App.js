import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './auth/Loginpage';
import Mainpage from './components/Mainpage';
import Signup from './auth/signup';
import Login from './auth/login';
import { SolanaProvider, wallets } from './auth/SolanaContext';

const App = () => {
  return (
    <SolanaProvider wallets={wallets}>
    <Router>
      <Routes>
        <Route path="/main" element={<Mainpage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router></SolanaProvider>
  );
};

export default App;
