import { SendMultipleNotificationService } from "../../core/notification/application";
import { GetTokenService } from "../../user/application";
import { GroupActivityInfoReq } from "../domain/entities";
import { DataRepository } from "../domain/repositories/DataRepository";

export class UpdateGroupActivityInfoService {
    constructor(
        private readonly dataRepository: DataRepository,
        private readonly getTokenService: GetTokenService,
        private readonly sendMultipleNotificationService: SendMultipleNotificationService
    ) {}

    async run(updateGroupActivity: GroupActivityInfoReq, activityId: number){
        try {

            let tokens: string[] = [];

            await this.dataRepository.updateGroupActivityInfo(updateGroupActivity, activityId);

            tokens = await Promise.all(
                updateGroupActivity.users.map( async (user) => {
                    let userToken = await this.getTokenService.run(user);
                    return userToken.token;
                })
            );

            await this.sendMultipleNotificationService.run({
                title: "Actividad grupal actualizada",
                body: `La actividad ${updateGroupActivity.title} ha sido actualizada`,
                tokens
            });
            
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}