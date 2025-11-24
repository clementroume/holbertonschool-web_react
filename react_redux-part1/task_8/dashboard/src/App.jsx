// src/App.jsx
// External libraries.
import React, { useEffect, useCallback } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useSelector, useDispatch } from 'react-redux';

// Redux actions / thunks
import { logout } from './features/auth/authSlice';
import { fetchNotifications } from './features/notifications/notificationsSlice';
import { fetchCourses } from './features/courses/coursesSlice';

// Components.
import BodySection from './components/BodySection/BodySection';
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom';
import CourseList from './pages/CourseList/CourseList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Notifications from './components/Notifications/Notifications';
import WithLogging from './components/HOC/WithLogging';

// HOCs with logging.
const LoginWithLoggingHOC = WithLogging(Login);
const CourseListWithLoggingHOC = WithLogging(CourseList);

// Styles.
const styles = StyleSheet.create({
  appContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  mainBody: {
    flex: 1,
    padding: '1rem',
  },
  footerContainer: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.8rem',
    fontWeight: 200,
    fontStyle: 'italic',
    borderTop: '0.25rem solid #e1003c',
  },
});

function App() {
  const dispatch = useDispatch();

  // Use isLoggedIn from Redux auth slice as single source of truth
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);

  // Keyboard shortcut (Ctrl + h) to logout
  const handleCtrlHKey = useCallback(
    (event) => {
      if (event.ctrlKey && event.key === 'h') {
        // Keep alert for compatibility with tests / expected behavior
        // (if tests expect no alert, remove it)
        // eslint-disable-next-line no-alert
        alert('Logging you out');
        dispatch(logout());
      }
    },
    [dispatch]
  );

  // Fetch notifications once on mount (dispatch thunk)
  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  // Fetch courses only when user is logged in
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCourses());
    }
  }, [dispatch, isLoggedIn]);

  // Keyboard listener
  useEffect(() => {
    document.addEventListener('keydown', handleCtrlHKey);
    return () => document.removeEventListener('keydown', handleCtrlHKey);
  }, [handleCtrlHKey]);

  return (
    <div className={css(styles.appContainer)}>
      {/* Notifications no longer receives notifications/displayDrawer/handlers via props.
          The Notifications component should itself read from Redux (notifications + displayDrawer) and dispatch actions. */}
      <Notifications />

      <Header />

      <div className={css(styles.mainBody)}>
        {isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            {/* CourseList reads its data (courses) from Redux */}
            <CourseListWithLoggingHOC />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            {/* Login should dispatch login action internally; no props passed from App */}
            <LoginWithLoggingHOC />
          </BodySectionWithMarginBottom>
        )}

        <BodySection title="News from the School">
          <p>Holberton School News goes here</p>
        </BodySection>
      </div>

      <div className={css(styles.footerContainer)}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
