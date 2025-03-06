
import { SendNotificationService } from "../../core/notification/application";
import { GetTokenService, GetUserByIdService } from "../../user/application";
import { UserByToken } from "../domain/entities";
import { DataRepository } from "../domain/repositories/DataRepository";

export class AddUserByTokenService {
    constructor(private readonly dataRepository: DataRepository, private readonly getTokenService: GetTokenService, private readonly sendNotificationService: SendNotificationService, private readonly getUserByIdService: GetUserByIdService) {}
    async run(addUserByToken: UserByToken) {
        try {
            
            await this.dataRepository.addUserByToken(addUserByToken);

            const group = await this.dataRepository.getGroupByToken(addUserByToken.token);

            const user = await this.getUserByIdService.run(addUserByToken.user_id);

            const userToken = await this.getTokenService.run(group.user_id);

            await this.sendNotificationService.run({
                title: "Un nuevo usuario se ha unido a tu grupo",
                body: `${user.firstname + " " + user.lastname} se ha unido a ${group.name}`,
                token: userToken.token
            });

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}