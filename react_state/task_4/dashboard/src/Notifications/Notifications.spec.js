import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

jest.mock('../utils/utils', () => ({
  getLatestNotification: jest.fn(),
}));

describe('Notifications component', () => {
  beforeEach(() => {
    getLatestNotification.mockReturnValue(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });

  test('renders the notifications title', () => {
    const props = {
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
      ],
      displayDrawer: true,
      handleDisplayDrawer: () => {},
      handleHideDrawer: () => {},
      markNotificationAsRead: () => {},
    };
    render(<Notifications {...props} />);
    const titleElement = screen.getByText(/Here is the list of notifications/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the close button and calls handleHideDrawer when clicked', () => {
    const handleHideDrawer = jest.fn();
    const props = {
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
      ],
      displayDrawer: true,
      handleDisplayDrawer: () => {},
      handleHideDrawer,
      markNotificationAsRead: () => {},
    };
    render(<Notifications {...props} />);
    const buttonElement = screen.getByRole('button', { name: /close/i });
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(handleHideDrawer).toHaveBeenCalledTimes(1);
  });

  test('it should display 3 notification items as expected through props', () => {
    const props = {
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
      ],
      displayDrawer: true,
      handleDisplayDrawer: () => {},
      handleHideDrawer: () => {},
      markNotificationAsRead: () => {},
    };

    render(<Notifications {...props} />);

    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(3);
  });

  test('it should display close button, p element, and notification items when displayDrawer is true', () => {
    const props = {
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
      ],
      displayDrawer: true,
      handleDisplayDrawer: () => {},
      handleHideDrawer: () => {},
      markNotificationAsRead: () => {},
    };

    render(<Notifications {...props} />);

    const closeButton = screen.getByRole('button', { name: /close/i });
    const pElement = screen.getByText(/here is the list of notifications/i);
    const listItems = screen.getAllByRole('listitem');

    expect(closeButton).toBeInTheDocument();
    expect(pElement).toBeInTheDocument();
    expect(listItems).toHaveLength(3);
  });

  test('it should call markNotificationAsRead prop when a notification item is clicked', () => {
    const markNotificationAsRead = jest.fn();
    const props = {
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
      ],
      displayDrawer: true,
      handleDisplayDrawer: () => {},
      handleHideDrawer: () => {},
      markNotificationAsRead,
    };

    render(<Notifications {...props} />);

    const listItems = screen.getAllByRole('listitem');

    fireEvent.click(listItems[0]);
    expect(markNotificationAsRead).toHaveBeenCalledWith(1);

    fireEvent.click(listItems[1]);
    expect(markNotificationAsRead).toHaveBeenCalledWith(2);
  });

  test('clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const props = {
      notifications: [],
      displayDrawer: false,
      handleDisplayDrawer,
      handleHideDrawer: () => {},
      markNotificationAsRead: () => {},
    };

    render(<Notifications {...props} />);

    const menuItem = screen.getByText(/your notifications/i);
    fireEvent.click(menuItem);

    expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
  });
});
