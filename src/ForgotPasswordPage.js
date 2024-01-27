import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find((u) => u.email === email);

    if (user) {
      const resetToken = Math.random().toString(36).slice(2);
      user.resetToken = resetToken;
      localStorage.setItem('users', JSON.stringify(storedUsers));

      navigate(`/set-password/${resetToken}`);
    } else {
      setMessage('User not found. Please check your email and try again.');
    }
  };

  return (
    <div class="root">
  <div class="row box justify-content-center align-items-center">
    <div class="col-md-6 mb-5">
      
      <div class="card shadow p-5 animated zoomIn slow clr">
      <h3 class="text-left font-weight-bold text-uppercase mb-3">Forgot Password Page</h3>
      
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <br></br>
        <button type="submit" class="btn btn-outline-dark btn-block rounded-pill allbtn1">Reset Password</button>
        <h6 class="mt-3">Already have an account? <Link to="/login">Login here</Link></h6>
      </form>
      {message && <p>{message}</p>} 
      <p><Link to="/login">Remembered your password? Login here</Link></p>
   
      </div>
    </div>
    </div>
    </div>
  );
};

export default ForgotPasswordPage;
