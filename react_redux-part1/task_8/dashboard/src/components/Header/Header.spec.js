import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { renderWithProviders } from '../../utils/test-utils';

describe('Header Component', () => {
  test('renders logout link when isLoggedIn is true', () => {
    renderWithProviders(<Header />, {
      preloadedState: {
        auth: { isLoggedIn: true, user: { email: 'test@test.com' } },
      },
    });
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
    expect(screen.getByText(/test@test.com/i)).toBeInTheDocument();
  });

  test('does not render logout link when isLoggedIn is false', () => {
    renderWithProviders(<Header />, {
      preloadedState: { auth: { isLoggedIn: false } },
    });
    expect(screen.queryByText(/logout/i)).not.toBeInTheDocument();
  });

  test('dispatches logout action on click', () => {
    const { store } = renderWithProviders(<Header />, {
      preloadedState: {
        auth: { isLoggedIn: true, user: { email: 'test@test.com' } },
      },
    });

    fireEvent.click(screen.getByText(/logout/i));

    const state = store.getState();
    expect(state.auth.isLoggedIn).toBe(false);
    expect(state.auth.user).toBeNull();
  });
});
