import { Notification } from "../domain/domain";
import { NotificationRepository } from "../domain/repositories/NotificationRepository";


export class SendNotificationService {
    constructor(private readonly notificationRepository: NotificationRepository) {}
    async run(notification: Notification) {
        try {
            
            await this.notificationRepository.sendNotification(notification);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}