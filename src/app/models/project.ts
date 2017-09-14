import {FinansalGoal} from './finansalGoal';


export class Project {
    id: number;
    title: string;
    completionDate: Date;
    description: string;
    content = "";
    image = 'http://res.cloudinary.com/profunding/image/upload/v1504950919/default-bg.jpg';
    finansalGoals: FinansalGoal[] = [];
    totalCost = 0;
    userId: string;
    tags: string[] = []
}
