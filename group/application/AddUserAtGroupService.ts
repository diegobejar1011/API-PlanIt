import { SendNotificationService } from "../../core/notification/application";
import { GetTokenService } from "../../user/application";
import { AddUserAtGroup } from "../domain/entities";
import { DataRepository } from "../domain/repositories/DataRepository";

export class AddUserAtGroupService {
    constructor(private readonly dataReposiotry: DataRepository, private readonly sendNotificationService: SendNotificationService, private readonly getTokenService: GetTokenService) {}

    async run(addUserAtGroup: AddUserAtGroup) {
        try {
            
            await this.dataReposiotry.addUserAtGroup(addUserAtGroup);

            const group = await this.dataReposiotry.getGroupById(addUserAtGroup.group_id);

            const tokenUser = await this.getTokenService.run(group.user_id);

            await this.sendNotificationService.run({
                title: "Has sido a un grupo nuevo" ,
                body: `Has sido agregado a ${group.name}`,
                token: tokenUser.token
            });
            
            
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}