import { SendMultipleNotificationService } from "../../core/notification/application";
import { GetTokenService } from "../../user/application";
import { DataRepository } from "../domain/repositories/DataRepository";

export class DeleteGroupService {
    constructor(
        private readonly dataRepository: DataRepository, 
        private readonly getTokenService: GetTokenService,
        private readonly sendMultipleNotificationService: SendMultipleNotificationService
    ) {}

    async run(id: number){
        try {

            let tokens: string[] = [];

            const group = await this.dataRepository.getGroupById(id)

            console.log(group);

            const users = await this.dataRepository.getUsersAtGroup(id);

            console.log(users);

            
            await this.dataRepository.deleteGroup(id);

            tokens = await Promise.all(
                users.map(async (user)=> {
                    let userToken = await this.getTokenService.run(user.user_id);
                    return userToken.token
                })
            );

            console.log(tokens);
            await this.sendMultipleNotificationService.run({
                title: `El grupo ${group.name} ha sido eliminado`,
                body: "Uno de tus grupos ha sido eliminado por el lider",
                tokens
            });

            
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}