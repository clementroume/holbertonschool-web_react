import React from 'react';

function NotificationItem({ type, html, value, markAsRead, id }) {
  // used by tests to detect renders and to keep parity with previous implementation
  // (PureComponent render spy). Do not remove unless tests are updated.
  // eslint-disable-next-line no-console
  console.log('Rendering NotificationItem');

  const baseClassName =
    'text-[color:var(--urgent-notification-item)] pl-1 max-[912px]:text-[20px] max-[912px]:w-full max-[912px]:border-b max-[912px]:border-black max-[912px]:p-[10px_8px]';

  if (type === 'default') {
    return (
      <li
        className="text-[color:var(--default-notification-item)] pl-1 max-[912px]:text-[20px] max-[912px]:w-full max-[912px]:border-b max-[912px]:border-black max-[912px]:p-[10px_8px]"
        data-notification-type={type}
        onClick={() => markAsRead(id)}
        role="listitem"
      >
        {value}
      </li>
    );
  } else if (type === 'urgent' && html !== undefined) {
    return (
      <li
        className={baseClassName}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
        role="listitem"
      />
    );
  } else {
    return (
      <li
        className={baseClassName}
        data-notification-type={type}
        onClick={() => markAsRead(id)}
        role="listitem"
      >
        {value}
      </li>
    );
  }
}

// React.memo performs a shallow prop comparison which mirrors the PureComponent behavior
export default React.memo(NotificationItem);
