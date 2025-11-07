import React, { useState } from 'react';
import WithLogging from '../HOC/WithLogging';

function Login(props) {
  const initialEmail = props.email || '';
  const initialPassword = props.password || '';

  const [enableSubmit, setEnableSubmit] = useState(false);
  const [formData, setFormData] = useState({
    email: initialEmail,
    password: initialPassword,
  });

  const validateEmail = (email) => {
    if (!email || typeof email !== 'string') return false;
    const e = email.trim();
    const re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return re.test(e);
  };

  const updateEnableSubmit = (email, password) => {
    const validEmail = validateEmail(email);
    const validPassword = typeof password === 'string' && password.length >= 8;
    setEnableSubmit(validEmail && validPassword);
  };

  const handleChangeEmail = (e) => {
    const email = e.target.value;
    setFormData((prev) => {
      const next = { ...prev, email };
      // update enableSubmit based on the new email and previous/new password
      updateEnableSubmit(next.email, next.password);
      return next;
    });
  };

  const handleChangePassword = (e) => {
    const password = e.target.value;
    setFormData((prev) => {
      const next = { ...prev, password };
      // update enableSubmit based on the new password and existing/new email
      updateEnableSubmit(next.email, next.password);
      return next;
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (props.logIn) {
      props.logIn(formData.email, formData.password);
    }
  };

  const { email, password } = formData;

  return (
    <div className="App-body flex flex-col p-5 pl-1 h-[45vh] border-t-4 border-[color:var(--main-color)]">
      <p className="text-xl mb-4">Login to access the full dashboard</p>

      <form onSubmit={handleLoginSubmit}>
        <div className="text-lg flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0">
          <label htmlFor="email" className="sm:pr-2">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            className="border rounded w-3/5 sm:w-auto px-2 py-1"
            value={email}
            onChange={handleChangeEmail}
          />

          <label htmlFor="password" className="sm:pl-2 sm:pr-2">
            Password
          </label>
          <input
            type="password"
            name="user_password"
            id="password"
            className="border rounded w-3/5 sm:w-auto px-2 py-1"
            value={password}
            onChange={handleChangePassword}
          />

          <input
            type="submit"
            value="OK"
            className="cursor-pointer border px-1 rounded sm:ml-2 w-fit"
            disabled={!enableSubmit}
          />
        </div>
      </form>
    </div>
  );
}

const LoginWithLogging = WithLogging(Login);
export default LoginWithLogging;
