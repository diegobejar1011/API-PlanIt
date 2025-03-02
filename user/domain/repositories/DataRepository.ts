import { CreateUserReq, CreateUserRes, SaveTokenReq, User} from "../entities";


export interface DataRepository {
    create(createUserReq: CreateUserReq): Promise<CreateUserRes>
    getUserByEmail(email: string): Promise<User>
    saveToken(saveTokenReq: SaveTokenReq): Promise<void>
    getToken(id: number): Promise<string>
}