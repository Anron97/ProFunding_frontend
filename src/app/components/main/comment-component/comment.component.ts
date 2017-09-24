import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {Comment} from "../../../models/comment";
import {CommentService} from "../../../services/comment.service";
import {Language} from "angular-l10n";



@Component({
    selector: 'comments-component',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css'],
})

export class CommentComponent implements OnInit {
    @Language() lang;
    @Input() comments: Comment[];
    @Input() user: User;
    @Output() addComment = new EventEmitter<Comment>();

    comment: Comment = new Comment();

    constructor(private userService: UserService,
                private commentService: CommentService) {

    }

    ngOnInit(): void {
        this.user = this.userService.getCurrentUser();
        this.comment.user = this.user;
    }

    sendComment() {
        this.comment.dateCreated = new Date();
        console.log(this.comment);
        this.comments.push(this.comment);
        this.addComment.emit(this.comment);
    }

    public checkRoleForDeleteComment(i: number): boolean {
        return true;
    }

    deleteComment(i: number): void {
        console.log(this.comments[i]);
        this.commentService.deleteComment(this.comments[i]).subscribe(
            responce => {
                if (responce) {
                    this.comments.splice(i, 1);
                }
            },
            error => {
                console.log(error);
            });
    }
}
