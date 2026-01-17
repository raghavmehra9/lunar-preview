import Notification from "@/components/common/Notification";
import React, { createContext, ReactNode, useContext, useState } from "react";

type NotificationType = "success" | "error";

interface NotificationContextProps {
  showNotification: (message: string, type?: NotificationType) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(
  undefined
);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<NotificationType>("success");

  const showNotification = (
    msg: string,
    type: NotificationType = "success"
  ) => {
    setMessage(msg);
    setType(type);

    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {message && <Notification message={message} type={type} />}
    </NotificationContext.Provider>
  );
};

export const useNotification = (): NotificationContextProps => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};
