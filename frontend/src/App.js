import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './auth/Loginpage';
import Mainpage from './components/Mainpage';
import Signup from './auth/signup';
import Login from './auth/login';
import About from './components/About';
 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Mainpage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
