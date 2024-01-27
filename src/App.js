import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import SetPasswordPage from './SetPasswordPage';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
  return (
 
      <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegistrationPage/>} />
        <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
        <Route path="/set-password/:token" element={<SetPasswordPage/>} />
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </Router>

  );
};

export default App;
