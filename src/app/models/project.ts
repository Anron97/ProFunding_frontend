import {FinansalGoal} from './finansalGoal';
import {User} from "./user";

export class Project {
    title: string
    completionDate: Date = new Date();
    description: string
    image = 'http://res.cloudinary.com/profunding/image/upload/v1504950919/default-bg.jpg';
    finansalGoals: FinansalGoal[] = [];
    totalCost = 0;
    user: User;
}
