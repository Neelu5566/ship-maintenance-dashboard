import React, { useEffect, useState } from 'react';

function NotificationCenter() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('notifications')) || [];
    setNotifications(stored);
  }, []);

  const dismissNotification = (id) => {
    const updated = notifications.filter(n => n.id !== id);
    setNotifications(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications.</p>
      ) : (
        <ul>
          {notifications.map(n => (
            <li key={n.id}>
              {n.message}
              <button onClick={() => dismissNotification(n.id)} style={{ marginLeft: '1rem' }}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotificationCenter;
