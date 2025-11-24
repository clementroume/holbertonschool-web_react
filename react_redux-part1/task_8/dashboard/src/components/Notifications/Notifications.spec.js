import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { renderWithProviders } from '../../utils/test-utils';

describe('Notifications Component', () => {
  test('renders notifications from store', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
    ];
    renderWithProviders(<Notifications />, {
      preloadedState: { notifications: { notifications, displayDrawer: true } },
    });
    expect(screen.getByText(/New course available/i)).toBeInTheDocument();
  });

  test('toggles drawer visibility', () => {
    const { store } = renderWithProviders(<Notifications />, {
      preloadedState: { notifications: { displayDrawer: false } },
    });

    // Open drawer
    fireEvent.click(screen.getByText(/your notifications/i));
    expect(store.getState().notifications.displayDrawer).toBe(true);
  });

  test('removes notification when marked as read', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
    ];
    const { store } = renderWithProviders(<Notifications />, {
      preloadedState: { notifications: { notifications, displayDrawer: true } },
    });

    // Simule le click sur le Mark as read (si NotificationItem est implémenté pour avoir un event click ou un bouton close)
    // Note: Assurez-vous que NotificationItem appelle bien la prop markAsRead
  });
});
