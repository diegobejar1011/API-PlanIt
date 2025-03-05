import { MultipleNotifications, Notification } from "../../../domain/domain";
import { NotificationRepository } from "../../../domain/repositories/NotificationRepository";
import { app } from "./domain/config";

export class FirebaseRepository implements NotificationRepository {
    async sendNotification(notification: Notification): Promise<void> {
        try {

            const message = {
                data: {
                    title: notification.title,
                    body: notification.body,
                    image: notification.image || ""
                },
                token: notification.token
            };
            
            
            await app.messaging().send(message);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async sendMultipleNotification(multipleNotification: MultipleNotifications): Promise<void> {
        try {
            
            const message = {
                data: {
                    title: multipleNotification.title,
                    body: multipleNotification.body
                },
                tokens: multipleNotification.tokens 
            }

            await app.messaging().sendEachForMulticast(message);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    
}