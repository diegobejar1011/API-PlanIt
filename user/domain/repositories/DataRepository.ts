import { CreateUserReq, CreateUserRes, SaveTokenReq, User, UserRes} from "../entities";


export interface DataRepository {
    create(createUserReq: CreateUserReq): Promise<CreateUserRes>
    getUserByEmail(email: string): Promise<User>
    saveToken(saveTokenReq: SaveTokenReq): Promise<void>
    getToken(id: number): Promise<string>
    getUserById(id: number): Promise<UserRes>
    confirmedToken(id: number): Promise<number>
}