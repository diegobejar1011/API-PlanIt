import { app } from "../domain/config";

export class SendNotificationService {
    async run(title: string, body: string, token: string) {
        try {
            const message = {
                notification: {
                    title,
                    body
                },
                token
            }
            
            await app.messaging().send(message);


        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}