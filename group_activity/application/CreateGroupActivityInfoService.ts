import { SendMultipleNotificationService } from "../../core/notification/application";
import { GetGroupByIdService } from "../../group/application";
import { GetTokenService } from "../../user/application";
import { GroupActivityInfoReq } from "../domain/entities";
import { DataRepository } from "../domain/repositories/DataRepository";

export class CreateGroupActivityInfoService {
    constructor(
        private readonly dataRepository: DataRepository, 
        private readonly sendMultipleNotificationService: SendMultipleNotificationService, 
        private readonly getTokenService: GetTokenService,
        private readonly getGroupByIdService: GetGroupByIdService) {}

    async run(groupActivityInfo: GroupActivityInfoReq){
        try {

            let tokens: string[] = [];

            const group = await this.getGroupByIdService.run(groupActivityInfo.group_id);

            await this.dataRepository.createGroupActivityInfo(groupActivityInfo);

    
            tokens = await Promise.all(
                groupActivityInfo.users.map(async (user) => {
                    let userToken = await this.getTokenService.run(user);
                    return userToken.token;
                })
            );

            await this.sendMultipleNotificationService.run({
                title: `Nueva actividad grupal en ${group.name}`,
                body: `Actividad nueva: ${groupActivityInfo.title}`,
                tokens
            });

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}