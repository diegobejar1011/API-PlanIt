
import { MultipleNotifications } from "../domain/domain";
import { NotificationRepository } from "../domain/repositories/NotificationRepository";

export class SendMultipleNotificationService {
    constructor(private readonly notificationRepostiory: NotificationRepository) {}

    async run(multipleNotifications: MultipleNotifications) {
        try {
            
            await this.notificationRepostiory.sendMultipleNotification(multipleNotifications);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}