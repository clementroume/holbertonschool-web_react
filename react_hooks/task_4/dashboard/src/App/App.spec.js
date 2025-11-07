import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('The App component renders without crashing', () => {
  render(<App />);
});

test('The App shows Login by default and CourseList after successful login; logout hides CourseList', async () => {
  render(<App />);

  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Password');
  const submitInput = screen.getByRole('button', { name: /OK/i });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitInput).toBeDisabled();

  await userEvent.type(emailInput, 'user@example.com');
  await userEvent.type(passwordInput, 'longpass8');

  await waitFor(() => {
    expect(submitInput).toBeEnabled();
  });

  fireEvent.click(submitInput);

  const tableElement = await screen.findByRole('table');
  expect(tableElement).toBeInTheDocument();

  const logoutSection = document.querySelector('#logoutSection');
  expect(logoutSection).toBeInTheDocument();

  const logoutLink = screen.getByText(/logout/i);
  fireEvent.click(logoutLink);

  await waitFor(() => {
    expect(screen.queryByRole('table')).toBeNull();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });
});

test('clicking a notification removes it and logs expected message', async () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

  render(<App />);

  const menuItem = screen.getByText(/your notifications/i);
  fireEvent.click(menuItem);

  const listItemsBefore = await screen.findAllByRole('listitem');
  expect(listItemsBefore.length).toBeGreaterThan(0);

  fireEvent.click(listItemsBefore[0]);

  expect(consoleSpy).toHaveBeenCalledWith(
    expect.stringMatching(/Notification\s+1\s+has been marked as read/i)
  );

  await waitFor(() => {
    const listItemsAfter = screen.queryAllByRole('listitem');
    expect(listItemsAfter.length).toBe(listItemsBefore.length - 1);
  });

  consoleSpy.mockRestore();
});
