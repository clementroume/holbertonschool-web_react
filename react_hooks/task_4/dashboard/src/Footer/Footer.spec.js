import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import newContext from '../Context/context';

test('It should render footer with copyright text', () => {
  render(<Footer />);

  const footerParagraph = screen.getByText(/copyright/i);

  expect(footerParagraph).toHaveTextContent(
    new RegExp(`copyright ${new Date().getFullYear()}`, 'i')
  );
  expect(footerParagraph).toHaveTextContent(/holberton school/i);
});

test('Contact us link is not displayed when user is logged out in context', () => {
  const contextValue = {
    user: {
      email: '',
      password: '',
      isLoggedIn: false,
    },
    logOut: () => {},
  };

  render(
    <newContext.Provider value={contextValue}>
      <Footer />
    </newContext.Provider>
  );

  const contactLink = screen.queryByText(/contact us/i);
  expect(contactLink).toBeNull();
});

test('Contact us link is displayed when user is logged in in context', () => {
  const contextValue = {
    user: {
      email: 'user@example.com',
      password: 'password',
      isLoggedIn: true,
    },
    logOut: () => {},
  };

  render(
    <newContext.Provider value={contextValue}>
      <Footer />
    </newContext.Provider>
  );

  const contactLink = screen.getByText(/contact us/i);
  expect(contactLink).toBeInTheDocument();
});
