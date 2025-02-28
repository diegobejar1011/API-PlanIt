import { CreateUserReq, CreateUserRes } from "../entities";


export interface DataRepository {
    create(createUserReq: CreateUserReq): Promise<CreateUserRes>
}