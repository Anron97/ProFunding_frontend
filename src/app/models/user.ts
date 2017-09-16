import {Project} from "./project";

export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    role: string;
    image =  'http://res.cloudinary.com/profunding/image/upload/v1505580510/default-user-image.jpg';
    projects: Project[];
    followedProjects: Project[];
}
