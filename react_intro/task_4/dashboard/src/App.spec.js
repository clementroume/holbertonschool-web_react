import { render, screen } from '@testing-library/react';
import App from './App.jsx';

// Test 1: Check if the h1 with the correct text is rendered.
test('renders the h1 element with the text "School dashboard"', () => {
  render(<App />);

  const headingElement = screen.getByRole('heading', {
    name: /school dashboard/i,
  });
  expect(headingElement).toBeInTheDocument();
});

// Test 2: Check if the login and copyright paragraphs are rendered.
test('renders the login paragraph and copyright paragraph', () => {
  render(<App />);

  const loginText = screen.getByText(/login to access the full dashboard/i);
  expect(loginText).toBeInTheDocument();

  const copyrightText = screen.getByText(/copyright/i);
  expect(copyrightText).toBeInTheDocument();
});

// Test 3: Check if the Holberton logo image is rendered.
test('renders the Holberton logo image', () => {
  render(<App />);

  const imgElement = screen.getByAltText(/holberton logo/i);
  expect(imgElement).toBeInTheDocument();
});

test('renders 2 input elements (one for email and the other for password', () => {
  render(<App />);

  const emailInput = screen.getByLabelText(/email/i);
  expect(emailInput).toBeInTheDocument();
  const passwordInput = screen.getByLabelText(/password/i);
  expect(passwordInput).toBeInTheDocument();
});

test('render 2 label elements with the text "email" and "password"', () => {
  render(<App />);

  const emailLabel = screen.getByText(/email/i);
  expect(emailLabel).toBeInTheDocument();

  const passwordLabel = screen.getByText(/password/i);
  expect(passwordLabel).toBeInTheDocument();
});

test('Render a button with the text "OK"', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: /ok/i });
  expect(button).toBeInTheDocument();
});
