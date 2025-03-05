import { SendNotificationService } from "../../core/notification/application";
import { GetTokenService } from "../../user/application";
import { DataRepository } from "../domain/repositories/DataRepository";

export class NotifyPersonalActivityService {
    constructor(private readonly dataRepository: DataRepository, private readonly getTokenService: GetTokenService, private readonly sendNotificationService: SendNotificationService){}

    async run(activityId: number){
        try {
            
            const personalActivity = await this.dataRepository.getPersonalActivity(activityId);

            const userToken = await this.getTokenService.run(personalActivity.user_id);

            await this.sendNotificationService.run({
                title: personalActivity.title,
                body: "Recordatorio",
                image: "https://res.cloudinary.com/dxvielior/image/upload/v1741052151/Logo_bhpzta.png",
                token: userToken.token
            });

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}