import { CreateGroupDto, GroupReq } from "../domain/entities";
import { DataRepository } from "../domain/repositories/DataRepository";
import { TokenRepository } from "../domain/repositories/TokenRepository";

export class CreateGroupService {
    constructor(private readonly dataRepository: DataRepository, private readonly tokenRepository: TokenRepository) {}

    async run(createGroup: CreateGroupDto){
        try {

            const token = this.tokenRepository.generateToken();

            const group: GroupReq = {
                ...createGroup,
                token: token
            }
            
            await this.dataRepository.createGroup(group);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}