import { MultipleNotifications, Notification } from "../domain";


export interface NotificationRepository {
    sendNotification(notification: Notification): Promise<void>;
    sendMultipleNotification(multipleNotification: MultipleNotifications): Promise<void>;
}