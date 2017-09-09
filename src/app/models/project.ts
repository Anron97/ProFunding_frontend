import {FinansalGoal} from './finansalGoal';

export class Project {
    title: string
    completionDate: Date = new Date();
    description: string
    image: string = "default-bg";
    finansalGoals: FinansalGoal[] = [];
    totalCost: number = 0;
}