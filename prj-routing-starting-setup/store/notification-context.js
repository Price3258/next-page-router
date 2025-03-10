const { createContext, useState, useEffect } = require("react");

const NotificationContext = createContext({
  notification: null, // {title, message, status},
  showNotification: function (data) {},
  hideNotification: function () {},
});

export function NotificationContextProvider({ children }) {
  const [activeNotification, setActiveNotification] = useState(null);

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

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
