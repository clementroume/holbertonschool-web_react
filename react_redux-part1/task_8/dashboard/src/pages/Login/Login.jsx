import { useDispatch } from 'react-redux';
import WithLogging from '../../components/HOC/WithLogging';
import useLogin from '../../hooks/useLogin';
import './Login.css';
import { login } from '../../features/auth/authSlice';

function Login() {
  const dispatch = useDispatch();
  const {
    email,
    password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleLoginSubmit,
  } = useLogin({
    onLogin: (email, password) => dispatch(login({ email, password })),
  });

  // Component styles with responsive design.
  const styles = StyleSheet.create({
    AppBody: {
      padding: '2rem',
      flex: 1,
    },
    AppBodyP: {
      marginBottom: '1rem',
    },
    form: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '1rem',
      '@media (max-width: 900px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.5rem',
      },
    },
    formInput: {
      padding: '0 0.25rem',
    },
    formButton: {
      padding: '0 0.25rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <form aria-label="form" onSubmit={handleLoginSubmit}>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
          />
          <input type="submit" value="OK" disabled={!enableSubmit} />
        </div>
      </div>
    </form>
  );
}

export default WithLogging(Login);
