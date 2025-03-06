import { SendMultipleNotificationService } from "../../core/notification/application";
import { GetTokenService } from "../../user/application";
import { DataRepository } from "../domain/repositories/DataRepository";

export class NotifyGroupActivityService {
    constructor(private readonly dataRepository: DataRepository, private readonly getTokenService: GetTokenService, private readonly sendMultipleNotificationService: SendMultipleNotificationService) {}
    async run(groupActivityId: number){
        try {

            console.log(groupActivityId);

            let tokens: string[] = [];
            
            const groupActivity = await this.dataRepository.getGroupActivityInfo(groupActivityId);

            tokens = await Promise.all(
                groupActivity.users.map(async (user) => {
                    let userToken = await this.getTokenService.run(user.id);
                    return userToken.token;
                })
            );

            await this.sendMultipleNotificationService.run({
                title: groupActivity.title,
                body: "Recordatorio de actividad grupal",
                tokens
            });


        } catch (error: any) {
            console.log(error.message);
            throw new Error(error.message);
        }
    }
}