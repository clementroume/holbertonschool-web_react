import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

function Notifications(props) {
  const {
    notifications = [],
    displayDrawer = true,
    handleDisplayDrawer,
    handleHideDrawer,
    markNotificationAsRead,
  } = props;

  return (
    <>
      <div
        className={`notification-title absolute right-3 top-1 whitespace-nowrap ${
          notifications.length > 0 && displayDrawer === false
            ? 'animate-bounce'
            : ''
        }`}
        onClick={handleDisplayDrawer}
      >
        Your notifications
      </div>
      {displayDrawer ? (
        <div className="notification-items relative border-[3px] border-dotted border-[color:var(--main-color)] right-3 p-1.5 w-[380px] float-right mt-7 max-[912px]:w-full max-[912px]:fixed max-[912px]:top-0 max-[912px]:left-0 max-[912px]:right-0 max-[912px]:bottom-0 max-[912px]:z-50 max-[912px]:float-none max-[912px]:m-0 max-[912px]:p-3 max-[912px]:bg-white max-[912px]:overflow-y-hidden max-[912px]:h-screen max-[430px]:overflow-y-hidden max-[430px]:h-screen">
          {notifications.length > 0 ? (
            <div className="relative">
              <p className="m-0 max-[912px]:text-[20px]">
                Here is the list of notifications
              </p>
              <button
                onClick={handleHideDrawer}
                aria-label="Close"
                className="absolute cursor-pointer right-0 top-0 bg-transparent"
              >
                <img src={closeIcon} alt="close icon" className="w-3 h-3" />
              </button>
              <ul className="list-[square] pl-5 max-[912px]:p-0 max-[912px]:list-none">
                {notifications.map((notification) => (
                  <NotificationItem
                    id={notification.id}
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={markNotificationAsRead}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <p className="max-[912px]:text-[20px]">
              No new notification for now
            </p>
          )}
        </div>
      ) : (
        []
      )}
    </>
  );
}

/**
 * Custom comparison for memo:
 * Return true if props are equal (so React.memo will skip re-render).
 * Return false if they differ (so component will re-render).
 *
 * We mirror a shallow comparison that is appropriate for the original PureComponent behavior:
 * - Compare displayDrawer (primitive)
 * - Compare notifications array shallowly (length + each item's shallow fields)
 * - Other props (handlers) are compared by reference equality
 */
function areEqual(prevProps, nextProps) {
  // compare displayDrawer
  if (prevProps.displayDrawer !== nextProps.displayDrawer) return false;

  // compare notifications arrays (shallow)
  const prevNotifs = prevProps.notifications || [];
  const nextNotifs = nextProps.notifications || [];
  if (prevNotifs.length !== nextNotifs.length) return false;

  for (let i = 0; i < prevNotifs.length; i += 1) {
    const a = prevNotifs[i];
    const b = nextNotifs[i];
    // compare commonly expected shallow fields: id, type, value, html
    if (a.id !== b.id) return false;
    if (a.type !== b.type) return false;
    if (a.value !== b.value) return false;

    const aHtml = a.html && typeof a.html === 'object' ? a.html.__html : a.html;
    const bHtml = b.html && typeof b.html === 'object' ? b.html.__html : b.html;
    if (aHtml !== bHtml) return false;
  }

  // handlers: compare by reference (PureComponent would also shallow compare these)
  if (prevProps.handleDisplayDrawer !== nextProps.handleDisplayDrawer)
    return false;
  if (prevProps.handleHideDrawer !== nextProps.handleHideDrawer) return false;
  if (prevProps.markNotificationAsRead !== nextProps.markNotificationAsRead)
    return false;

  // if everything above is equal, return true to skip re-render
  return true;
}

export default React.memo(Notifications, areEqual);
