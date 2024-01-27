import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();

    // password validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = storedUsers.find((u) => u.email === email);

    if (existingUser) {
      setError('Email is already registered');
    } else {
      const resetToken = Math.random().toString(36).slice(2);
      const newUser = { email, password, resetToken };
      localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));

      console.log('Registration successful:', newUser);
      alert("Registration Successfully Completed!!")
      navigate('/login'); 
    }
  };

  return (
  <div class="root">
    <div class='row box justify-content-center align-items-center'>
    <div class="col-md-6 mb-5">
      
      <div class="card shadow p-5 animated zoomIn slow clr">
      <h3 class="text-center font-weight-bold text-uppercase mb-3">Registration Page</h3>
      
      <form onSubmit={handleRegistration}>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <br></br>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <br></br>
         <div class="form-group">
          <label>Confirm Password</label>
          <input type="password" class="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
        </div>
        <br></br>
        <button type="submit" class="btn btn-outline-dark btn-block rounded-pill allbtn">Register</button>
        <h6 class="mt-3">Already have an account? <Link to="/login">Login here</Link></h6>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
   
      </div>
    </div>
    </div>
    </div>
    
  );
};

export default RegistrationPage;
