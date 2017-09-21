import {User} from "./user";

export class Comment {
    id: number;
    dateCreated: Date;
    projectId: number;
    content: string;
    user: User;
}