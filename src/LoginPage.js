import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find((u) => u.email === email && u.password === password);

    if (user) {
      console.log('Login successful:', { email });
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
<div class="root">
  <div class="row justify-content-center align-items-center box">
    <div class="col-md-6 mb-5">
      <div class="card shadow p-5 animated zoomIn slow clr">
        <i class="bi bi-android alien"></i>
        <h3 class="text-center font-weight-bold text-uppercase mb-3">Login Page</h3>

        <form onSubmit={handleLogin}>
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <br>
          </br>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <br>
          </br>
          <button type="submit" class="btn btn-outline-dark btn-block rounded-pill allbtn">Login</button>
          <h6 class="mt-3">Don't have an account? <Link to="/register">Register here</Link></h6>
          <h6><Link to="/forgot-password">Forgot your password?</Link></h6>
        </form>
        <br>
        </br>
        <div class="text-center">
          <i class="bi bi-facebook icn"></i>
          <i class="bi bi-twitter icn"></i>
          <i class="bi bi-instagram icn"></i>
          <i class="bi bi-google icn"></i>
        </div>
        <br>
        </br>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  </div>
</div>

  );
};

export default LoginPage;
