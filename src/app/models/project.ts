import {FinancialGoal} from './financialGoal';
import {CommentComponent} from "../components/main/comment-component/comment.component";


export class Project {
    id: number;
    title: string;
    completionDate: Date;
    description: string;
    content = "";
    image = 'http://res.cloudinary.com/profunding/image/upload/v1504950919/default-bg.jpg';
    financialGoals: FinancialGoal[] = [];
    totalCost = 0;
    currentSum = 0;
    userId: number;
    rating = 0;
    status: string;
    leftDays = 0;
    tags: string[] = [];
    comments: CommentComponent[] = [];
}
