import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {Comment} from "../../../models/comment";


@Component({
    selector: 'comments-component',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css'],
})

export class CommentComponent implements OnInit {
    @Input()
    comments: Comment[];
    @Input()
    user: User;
    comment: Comment = new Comment();

    constructor(private userService: UserService) {

    }

    ngOnInit(): void {
        this.user = this.userService.getCurrentUser();
        this.comment.user = this.user;
    }

    addComment() {
        this.comments.push(this.comment);
    }

    public checkRoleForDeleteComment(i: number): boolean {
        return true;
    }

    deleteComment(i: number): void {
        this.comments.splice(i, 1);
    }
}
