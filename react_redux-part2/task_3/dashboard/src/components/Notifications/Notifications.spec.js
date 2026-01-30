import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import mockAxios from 'jest-mock-axios';
import Notifications from './Notifications';
import notificationsSlice, {
  fetchNotifications,
} from '../../features/notifications/notificationsSlice';

describe('Notifications', () => {
  let store;

  const mockData = {
    notifications: [
      {
        id: 1,
        context: {
          type: 'default',
          value: 'New course available',
          isRead: false,
        },
      },
      {
        id: 2,
        context: {
          type: 'urgent',
          value: 'New resume available',
          isRead: false,
        },
      },
      {
        id: 3,
        context: { type: 'urgent', value: 'Urgent requirement', isRead: false },
      },
    ],
  };

  beforeEach(() => {
    store = configureStore({
      reducer: {
        notifications: notificationsSlice,
      },
    });
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test('renders without crashing', async () => {
    const promise = store.dispatch(fetchNotifications());
    mockAxios.mockResponse({ data: mockData.notifications });
    await promise;

    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
  });

  test('toggles drawer visibility when clicking the title', async () => {
    const promise = store.dispatch(fetchNotifications());
    mockAxios.mockResponse({ data: mockData.notifications });
    await promise;

    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    fireEvent.click(screen.getByText(/your notifications/i));

    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
  });

  test('close drawer on close button', async () => {
    const promise = store.dispatch(fetchNotifications());
    mockAxios.mockResponse({ data: mockData.notifications });
    await promise;

    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    expect(screen.getByText('New course available')).toBeInTheDocument();

    fireEvent.click(screen.getByAltText('close icon'));
  });

  test('marks notification as read', async () => {
    const promise = store.dispatch(fetchNotifications());
    mockAxios.mockResponse({ data: mockData.notifications });
    await promise;

    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    const firstNotification = screen.getByText('New course available');

    fireEvent.click(firstNotification);

    await waitFor(() => {
      // Initially 3 items, one marked read -> 2 items remaining
      const updatedNotifications = screen.getAllByRole('listitem');
      expect(updatedNotifications).toHaveLength(2);
    });
  });

  test('renders with displayDrawer true', async () => {
    const promise = store.dispatch(fetchNotifications());
    mockAxios.mockResponse({ data: mockData.notifications });
    await promise;

    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
  });

  test('does not re-render when drawer visibility is toggled', async () => {
    const promise = store.dispatch(fetchNotifications());
    mockAxios.mockResponse({ data: mockData.notifications });
    await promise;

    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    expect(screen.getByText('New course available')).toBeInTheDocument();

    fireEvent.click(screen.getByText(/your notifications/i));
    fireEvent.click(screen.getByText(/your notifications/i));
    expect(screen.getByText('New course available')).toBeInTheDocument();
  });

  test('filters notifications by urgent and default', async () => {
    const promise = store.dispatch(fetchNotifications());
    mockAxios.mockResponse({ data: mockData.notifications });
    await promise;

    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    // Initial state: All (3 notifications)
    expect(screen.getAllByRole('listitem')).toHaveLength(3);

    // Click Urgent button
    fireEvent.click(screen.getByText('‼️'));
    // Should show 2 urgent notifications
    const urgentItems = screen.getAllByRole('listitem');
    expect(urgentItems).toHaveLength(2);
    expect(screen.queryByText('New course available')).not.toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();

    // Click Default button
    fireEvent.click(screen.getByText('??'));
    // Should show 1 default notification
    const defaultItems = screen.getAllByRole('listitem');
    expect(defaultItems).toHaveLength(1);
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.queryByText('New resume available')).not.toBeInTheDocument();
  });
});
