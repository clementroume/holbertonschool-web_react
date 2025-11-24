import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import closeIcon from '../../assets/close-icon.png';
import NotificationItem from '../NotificationItem/NotificationItem';
import {
  markAsRead,
  handleDisplayDrawer,
  handleHideDrawer,
} from '../../features/notifications/notificationsSlice';
import './Notifications.css';

function Notifications() {
  const displayDrawer = useSelector(
    (state) => state.notifications.displayDrawer
  );
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="menuItem" onClick={() => dispatch(handleDisplayDrawer())}>
        Your notifications
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{
              color: '#3a3a3a',
              fontWeight: 'bold',
              background: 'none',
              border: 'none',
              fontSize: '15px',
              position: 'absolute',
              right: '2px',
              top: '2px',
              cursor: 'pointer',
            }}
            aria-label="Close"
            onClick={() => dispatch(handleHideDrawer())}
          >
            <img src={closeIcon} alt="closeIcon" width="10px" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {notifications.length === 0 ? (
              <NotificationItem
                type="default"
                value="No new notification for now"
              />
            ) : (
              notifications.map((val) => (
                <NotificationItem
                  key={val.id}
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  markAsRead={() => dispatch(markAsRead(val.id))}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
}

export default Notifications;
