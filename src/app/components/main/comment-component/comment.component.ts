import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {Comment} from "../../../models/comment";



@Component({
    selector: 'comments-component',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css'],
})

export class CommentComponent implements OnInit {
    @Input() comments: Comment[];
    @Input() user: User;
    @Output() addComment = new EventEmitter<Comment>();

    comment: Comment = new Comment();

    constructor(private userService: UserService) {

    }

    ngOnInit(): void {
        this.user = this.userService.getCurrentUser();
        this.comment.user = this.user;
    }

    sendComment() {
        this.comment.dateCreated = new Date();
        this.comments.push(this.comment);
        this.addComment.emit(this.comment);
    }

    public checkRoleForDeleteComment(i: number): boolean {
        return true;
    }

    deleteComment(i: number): void {
        this.comments.splice(i, 1);
    }
}
