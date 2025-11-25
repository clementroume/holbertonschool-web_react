import React, { useEffect, useCallback } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { logout } from './features/auth/authSlice';
import { fetchNotifications } from './features/notifications/notificationsSlice';
import { fetchCourses } from './features/courses/coursesSlice';

// Components
import BodySection from './components/BodySection/BodySection';
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom';
import CourseList from './pages/CourseList/CourseList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Notifications from './components/Notifications/Notifications';
import WithLogging from './components/HOC/WithLogging';

// HOC
const LoginWithLoggingHOC = WithLogging(Login);
const CourseListWithLoggingHOC = WithLogging(CourseList);

const styles = StyleSheet.create({
  appContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, Helvetica, sans-serif',
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
  // Le test vérifie state.auth.isLoggedIn
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  // 1. Fetch Notifications au montage (requis par le test "should NOT populate courses...")
  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  // 2. Fetch Courses UNIQUEMENT si loggé (requis par le test "should populate courses WHEN logged in")
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCourses());
    }
  }, [isLoggedIn, dispatch]);

  const handleCtrlHKey = useCallback(
    (event) => {
      if (event.ctrlKey && event.key === 'h') {
        event.preventDefault();
        alert('Logging you out');
        dispatch(logout());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleCtrlHKey);
    return () => {
      document.removeEventListener('keydown', handleCtrlHKey);
    };
  }, [handleCtrlHKey]);

  return (
    <div className={css(styles.appContainer)}>
      <Notifications />
      <Header />
      <div className={css(styles.mainBody)}>
        {isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseListWithLoggingHOC />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
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
