import React, { useState, useEffect } from 'react';
import { useParams, useNavigate ,Link} from 'react-router-dom';

const SetPasswordPage = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find((u) => u.resetToken === token);

    if (!user) {
      setError('Invalid or expired reset token. Please request a new one.');
    }
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // password validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = storedUsers.findIndex((u) => u.resetToken === token);

    if (userIndex !== -1) {
      storedUsers[userIndex].password = password;
      storedUsers[userIndex].resetToken = null;
      localStorage.setItem('users', JSON.stringify(storedUsers));

      setSuccessMessage('Password changed successfully');
      navigate('/login');
    } else {
      setError('Invalid or expired reset token. Please request a new one.');
    }
  };

  return (
    <div class="root">
  <div class="row justify-content-center align-items-center box">
    <div class="col-md-6 mb-5">
      <div class="card shadow p-5 animated zoomIn slow clr">
        <i class="bi bi-android alien"></i>
        <h3 class="text-center font-weight-bold text-uppercase mb-3">Set Password</h3>

        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label>New Password</label>
            <input class="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <br>
          </br>
          <div class="form-group">
            <label>Confirm Password</label>
            <input class="form-control" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <br>
          </br>
          <button type="submit" class="btn btn-outline-dark btn-block rounded-pill allbtn">Set Password</button>
        </form>
        <br>
        </br>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <p><Link to="/login">Remembered your password? Login here</Link></p>
       
        <br>
        </br>
      </div>
    </div>
  </div>
</div>
  );
};

export default SetPasswordPage;

