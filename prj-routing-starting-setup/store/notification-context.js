const { createContext, useState } = require("react");

const NotificationContext = createContext({
  notification: null, // {title, message, status},
  showNotification: function (data) {},
  hideNotification: function () {},
});

export function NotificationContextProvider({ children }) {
  const [activeNotification, setActiveNotification] = useState(false);

  function showNotificationHandler(data) {
    setActiveNotification(data);
  }
  function hideNotificationHanlder() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHanlder,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
