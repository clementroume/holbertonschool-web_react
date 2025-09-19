import Login from './Login';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('renders 2 labels, 2 inputs and 1 button', () => {
  const { login } = render(<Login />);

  const labels = login.querySelectorAll('label');
  expect(labels.length).toBe(2);

  const inputs = login.querySelectorAll('input');
  expect(inputs.length).toBe(2);

  expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
});

test('focuses the input when its label is clicked', async () => {
  const { login } = render(<Login />);
  const usr = userEvent.setup();

  const mailLabel = login.querySelector('label[for="email"]');
  const mailInput = screen.getByLabelText(/email/i);

  await usr.click(mailLabel);
  expect(mailInput).toHaveFocus();
});
