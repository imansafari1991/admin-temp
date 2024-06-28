import { notification } from "antd";
import { createContext, useContext } from "react";
interface NotificationContextType {
    openNotification: (type: NotificationType, message: string, description: string) => void
}

const NotificationContext = createContext<NotificationContextType>({} as NotificationContextType);
export const NotificationProvider= ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const openNotification = (type: NotificationType, message: string, description: string) => {
        notification[type]({
            message,
            description,
        });
    };
    return (
        <NotificationContext.Provider value={{ openNotification }}>
            {children}
        </NotificationContext.Provider>
    );
}

export const useNotification = () => useContext(NotificationContext);