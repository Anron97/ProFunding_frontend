import {Project} from "./project";

export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    role: string;
    token: string;
    image =  'http://res.cloudinary.com/profunding/image/upload/v1505580510/default-user-image.jpg';
    scanOfPassport: string;
    isSendConfirm: boolean;
    isBlocked: boolean;
    projects: Project[];
    followedProjects: Project[];
}
