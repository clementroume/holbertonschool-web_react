import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithProviders } from '../utils/test-utils';

describe('App Component', () => {
  test('renders Login component when isLoggedIn is false', () => {
    renderWithProviders(<App />, {
      preloadedState: { auth: { isLoggedIn: false } },
    });
    // Check for login form specific elements
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/log in to continue/i)).toBeInTheDocument();
  });

  test('renders CourseList component when isLoggedIn is true', () => {
    renderWithProviders(<App />, {
      preloadedState: {
        auth: { isLoggedIn: true, user: { email: 'test@test.com' } },
        courses: { courses: [] }, // Init empty courses
      },
    });
    // Check for CourseList specific elements
    expect(screen.getByText(/course list/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();
  });
});
