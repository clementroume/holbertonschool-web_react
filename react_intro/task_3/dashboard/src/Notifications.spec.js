import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  // Test 1: Check if the notifications title is rendered.
  test('renders the notifications title "Here is the list of notifications"', () => {
    render(<Notifications />);
    // We look for the text content, ignoring case.
    const titleElement = screen.getByText(/here is the list of notifications/i);
    expect(titleElement).toBeInTheDocument();
  });

  // Test 2: Check if the button element is rendered.
  test('renders the close button', () => {
    render(<Notifications />);
    // The best way to find a button is by its accessible role and name.
    const buttonElement = screen.getByRole('button', { name: /close/i });
    expect(buttonElement).toBeInTheDocument();
  });

  // Test 3: Verify that there are 3 list items rendered.
  test('renders three list items', () => {
    render(<Notifications />);
    // We get all elements with the role of 'listitem' (li elements).
    const listItems = screen.getAllByRole('listitem');
    // We then check if the array contains exactly 3 items.
    expect(listItems).toHaveLength(3);
  });

  // Test 4: Check if clicking the button logs to the console.
  test('logs "Close button has been clicked" to the console when clicked', () => {
    // We create a "spy" to watch the console.log function.
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    render(<Notifications />);
    const closeButton = screen.getByRole('button', { name: /close/i });

    // We simulate a user click event on the button.
    fireEvent.click(closeButton);

    // We check if our spy was called with the correct message.
    expect(consoleLogSpy).toHaveBeenCalledWith('close button has been clicked');

    // It's important to restore the original console.log function after the test.
    consoleLogSpy.mockRestore();
  });
});
