import { render, screen, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';

test('it should call markAsRead with the correct id when the notification item is clicked', () => {
  const mockMarkAsRead = jest.fn();
  const props = {
    id: 42,
    type: 'default',
    value: 'Test notification',
    markAsRead: mockMarkAsRead,
  };

  render(<NotificationItem {...props} />);

  const liElement = screen.getByRole('listitem');

  fireEvent.click(liElement);

  expect(mockMarkAsRead).toHaveBeenCalledTimes(1);
  expect(mockMarkAsRead).toHaveBeenCalledWith(42);
});

describe('NotificationItem - memo behavior', () => {
  // Spy on console.log which the functional component calls on each render
  const mockConsoleLog = jest
    .spyOn(console, 'log')
    .mockImplementation(() => {});
  let markAsRead;

  beforeEach(() => {
    jest.clearAllMocks();
    markAsRead = jest.fn();
  });

  afterAll(() => {
    mockConsoleLog.mockRestore();
  });

  test('should re-render when props change', () => {
    const { rerender } = render(
      <NotificationItem
        id={1}
        type="urgent"
        value="New notification"
        markAsRead={markAsRead}
      />
    );

    // initial render should have logged once
    expect(console.log).toHaveBeenCalledTimes(1);

    // rerender with updated prop -> should trigger another render (log)
    rerender(
      <NotificationItem
        id={1}
        type="urgent"
        value="Updated notification"
        markAsRead={markAsRead}
      />
    );

    expect(console.log).toHaveBeenCalledTimes(2);
  });

  test('should not re-render when props do not change', () => {
    const { rerender } = render(
      <NotificationItem
        id={1}
        type="urgent"
        value="New notification"
        markAsRead={markAsRead}
      />
    );

    const initialRenderCount = console.log.mock.calls.length;

    // rerender with identical props -> memo should prevent additional render
    rerender(
      <NotificationItem
        id={1}
        type="urgent"
        value="New notification"
        markAsRead={markAsRead}
      />
    );

    expect(console.log.mock.calls.length).toBe(initialRenderCount);
  });
});
