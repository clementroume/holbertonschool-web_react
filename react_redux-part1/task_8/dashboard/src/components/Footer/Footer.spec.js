import React from 'react';
import { screen } from '@testing-library/react';
import Footer from './Footer';
import { renderWithProviders } from '../../utils/test-utils';

describe('Footer Component', () => {
  test('renders Contact us link when isLoggedIn is true', () => {
    renderWithProviders(<Footer />, {
      preloadedState: { auth: { isLoggedIn: true } },
    });
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
  });

  test('does not render Contact us link when isLoggedIn is false', () => {
    renderWithProviders(<Footer />, {
      preloadedState: { auth: { isLoggedIn: false } },
    });
    expect(screen.queryByText(/contact us/i)).not.toBeInTheDocument();
  });
});
