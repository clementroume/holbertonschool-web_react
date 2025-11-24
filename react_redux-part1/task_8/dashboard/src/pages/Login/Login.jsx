import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);
  const dispatch = useDispatch();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setEnableSubmit(e.target.value !== '' && password !== '');
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setEnableSubmit(email !== '' && e.target.value !== '');
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleChangeEmail}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handleChangePassword}
      />
      <input type="submit" value="OK" disabled={!enableSubmit} />
    </form>
  );
}

export default Login;
