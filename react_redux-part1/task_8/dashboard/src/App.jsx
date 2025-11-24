import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import CourseList from './pages/CourseList/CourseList';
import Notifications from './components/Notifications/Notifications';
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom';
import BodySection from './components/BodySection/BodySection';
import { fetchNotifications } from './features/notifications/notificationsSlice';
import { fetchCourses } from './features/courses/coursesSlice';
import './App.css'; // Assure-toi d'avoir le CSS si nécessaire

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  // Fetch notifications on mount
  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  // Fetch courses when logged in
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCourses());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis at tempora odio, necessitatibus repudiandae
              reiciendis cumque animi molestiae dolores voluptatem, su
            </p>
          </BodySection>
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
