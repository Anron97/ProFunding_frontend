import {User} from "./user";

export class Comment {
    dateCreated: Date;
    projectId: number;
    content: string;
    user: User;
}