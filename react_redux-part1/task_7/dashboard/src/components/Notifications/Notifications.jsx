import React, { memo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useSelector, useDispatch } from 'react-redux';
import closeIcon from '../../assets/close-icon.png';
import NotificationItem from '../NotificationItem/NotificationItem';
// Assure-toi que ces noms correspondent EXACTEMENT aux exports de ton notificationsSlice
// La consigne demande souvent: markNotificationAsRead, showDrawer, hideDrawer
import {
  markAsRead,
  showDrawer,
  hideDrawer,
} from '../../features/notifications/notificationsSlice';

// Définition des styles avec Aphrodite
const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
    marginRight: '1rem',
    cursor: 'pointer',
    ':hover': {
      animationName: {
        '0%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-5px)' },
        '100%': { transform: 'translateY(5px)' },
      },
      animationDuration: '0.5s',
      animationIterationCount: 3,
    },
  },
  notifications: {
    padding: '1rem',
    border: '2px dashed #e1003c', // Bordure rouge typique du projet
    position: 'absolute',
    top: '2.5rem',
    right: 0,
    backgroundColor: '#fff',
    zIndex: 100, // Pour passer au-dessus
    '@media (max-width: 900px)': {
      width: '100%',
      height: '100%',
      top: 0,
      right: 0,
      border: 'none',
      fontSize: '20px',
      padding: 0,
      backgroundColor: 'white',
    },
  },
  closeButton: {
    color: '#3a3a3a',
    fontWeight: 'bold',
    background: 'none',
    border: 'none',
    fontSize: '15px',
    position: 'absolute',
    right: '2px',
    top: '2px',
    cursor: 'pointer',
    outline: 'none',
  },
  ul: {
    padding: 0,
    listStyle: 'none',
    '@media (max-width: 900px)': {
      padding: 0,
    },
  },
});

function Notifications() {
  // Sélection du state via Redux
  const displayDrawer = useSelector(
    (state) => state.notifications.displayDrawer
  );
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );

  // Initialisation du dispatch
  const dispatch = useDispatch();

  // Handlers utilisant dispatch
  const handleDisplayDrawer = () => {
    dispatch(showDrawer());
  };

  const handleHideDrawer = () => {
    dispatch(hideDrawer());
  };

  const handleMarkAsRead = (id) => {
    dispatch(markAsRead(id));
  };

  return (
    <>
      <div
        className={css(styles.menuItem)}
        onClick={handleDisplayDrawer}
        id="menuItem" // ID souvent requis pour les tests
      >
        Your notifications
      </div>

      {displayDrawer && (
        <div className={css(styles.notifications)} id="Notifications">
          <button
            className={css(styles.closeButton)}
            aria-label="Close"
            onClick={handleHideDrawer}
          >
            <img src={closeIcon} alt="closeIcon" width="10px" />
          </button>

          <p>Here is the list of notifications</p>

          <ul className={css(styles.ul)}>
            {/* Vérification si notifications est vide ou undefined */}
            {!notifications || notifications.length === 0 ? (
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
                  markAsRead={() => handleMarkAsRead(val.id)}
                  id={val.id}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
}

// Optimization (optionnel mais recommandé)
export default memo(Notifications);
