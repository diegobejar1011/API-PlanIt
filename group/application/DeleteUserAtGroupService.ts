import { SendNotificationService } from "../../core/notification/application";
import { GetTokenService } from "../../user/application";
import { DataRepository } from "../domain/repositories/DataRepository";

export class DeleteUserAtGroupService {
    constructor(private readonly dataRepository: DataRepository, private readonly sendNotificationService: SendNotificationService, private readonly getTokenService: GetTokenService) {}

    async run(userGroupId: number) {
        try {

            const groupUser = await this.dataRepository.getGroupUser(userGroupId);

            const group = await this.dataRepository.getGroupByActivity(groupUser.group_id);

            await this.dataRepository.deleteUserAtGroup(userGroupId);

            const tokenUser = await this.getTokenService.run(groupUser.user_id);

            await this.sendNotificationService.run({
                title: `Has sido eliminado de ${group.name}`,
                body: "El lider te ha eliminado del grupo ",
                token: tokenUser.token
            }); 

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}