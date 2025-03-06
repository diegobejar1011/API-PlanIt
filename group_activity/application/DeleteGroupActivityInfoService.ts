import { SendMultipleNotificationService } from "../../core/notification/application";
import { GetTokenService } from "../../user/application";
import { DataRepository } from "../domain/repositories/DataRepository";

export class DeleteGroupActivityInfoService {
    constructor(
        private readonly dataRepository: DataRepository, 
        private readonly sendMultipleNotificationService: SendMultipleNotificationService, 
        private readonly getTokenService: GetTokenService
    ) {}
    async run(activityId: number) {
        try {

            let tokens: string[] = [];

            const groupActivity = await this.dataRepository.getGroupActivityInfo(activityId);

            await this.dataRepository.deleteGroupActivityInfo(activityId);

            tokens = await Promise.all(
                groupActivity.users.map( async (user) => {
                    let userToken = await this.getTokenService.run(user.id);
                    return userToken.token;
                })
            );

            await this.sendMultipleNotificationService.run({
                title: "Actividad grupal eliminada",
                body: `La actividad ${groupActivity.title} ha sido eliminada`,
                tokens
            });

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}