import {Project} from "./project";

export class User {
    id: number;
    username: string;
    email: string = 'Anron2012@mail.ru'
    password: string;
    role: string = 'NO_PROOFED_USER'
    token: string;
    image =  'http://res.cloudinary.com/profunding/image/upload/v1505580510/default-user-image.jpg';
    isSendConfirm: boolean;
    isBlocked: boolean;
    projects: Project[];
    followedProjects: Project[];
}
