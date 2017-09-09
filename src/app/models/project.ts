import {FinansalGoal} from './finansalGoal';

export class Project {
    title: string
    completionDate: Date = new Date();
    description: string
    image: string = "/src/assets/img/default-bg.jpg";
    finansalGoals: FinansalGoal[] = [];
    totalCost: number = 0;
}