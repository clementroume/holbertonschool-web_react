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

  const loginText = screen.getByText(/Login to access the full dashboard/i);
  expect(loginText).toBeInTheDocument();

  const currentYear = new Date().getFullYear();
  const copyrightText = screen.getByText(
    `Copyright ${currentYear} - holberton School`
  );
  expect(copyrightText).toBeInTheDocument();
});

// Test 3: Check if the Holberton logo image is rendered.
test('renders the Holberton logo image', () => {
  render(<App />);

  const imgElement = screen.getByAltText(/holberton logo/i);
  expect(imgElement).toBeInTheDocument();
});
