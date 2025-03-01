import { CreateUserReq, CreateUserRes, User} from "../entities";


export interface DataRepository {
    create(createUserReq: CreateUserReq): Promise<CreateUserRes>
    getUserByEmail(email: string): Promise<User>
}