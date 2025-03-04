import { UserRes } from "../../../user/domain/entities";

export interface GroupActivityInfoRes {
    id: number;
    title: string;
    category: string;
    status: string;
    description: string;
    date_to: Date;
    users: [UserRes]
}