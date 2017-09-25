import {Component, OnDestroy, OnInit} from "@angular/core";
import {Project} from "../../../models/project";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../../services/project.service";
import {DateService} from "../../../services/date.service";
import {UserService} from "../../../services/user.service";
import {TagsService} from "../../../services/tags.service";
import {CommentService} from "../../../services/comment.service";
import {Comment} from "../../../models/comment";
import {Rating} from "../../../models/rating";
import {RatingService} from "../../../services/rating.service";
import {Message} from 'primeng/components/common/api';
import {Language} from "angular-l10n";
import {User} from "../../../models/user";
import {PaymentService} from "../../../services/payment.service";

@Component({
    selector: 'project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnDestroy {
    @Language() lang;
    private id: number;
    private project: Project;
    private completionDate: String;
    private subscription: Subscription;
    private myProject = false;
    private currentUser: User;
    private inputSum = 0;
    private msgs: Message[] = [];

    constructor(private activateRoute: ActivatedRoute,
                private projectService: ProjectService,
                private dateService: DateService,
                private tagService: TagsService,
                private userService: UserService,
                private router: Router,
                private ratingService: RatingService,
                private commentService: CommentService,
                private paymentService: PaymentService) {
    }

    ngOnInit(): void {
        this.subscription = this.activateRoute.params.subscribe(params => this.id = +params['id']);
        if (this.id === 0) {
            this.project = this.projectService.getDraft();
            this.project = this.projectService.verifyProject(this.project);
            this.completionDate = this.dateService.formatDate(this.project.completionDate);
            this.myProject = true;
        } else {
            this.projectService.getProjectById(this.id).subscribe(
                data => {
                    console.log(data);
                    this.project = data;
                    this.project.completionDate = new Date(this.project.completionDate);
                    this.tagService.verifyTags(this.project.tags);
                    this.completionDate = this.dateService.formatDate(this.project.completionDate);
                    this.ratingService.checkEnable(this.id).subscribe(
                        response => {
                            this.project.isRated = !response;
                            console.log(response);
                        },
                        error => {
                            console.log(error);
                            this.project.isRated = true;
                        }
                    )
                    if (this.currentUser && this.currentUser.id === this.project.userId) {
                        this.myProject = true;
                        this.project.isRated = true;
                    }
                },
                error => console.log()
            )

        }
        this.currentUser = this.userService.getCurrentUser();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    navigate() {
        this.projectService.saveAsEditProject(this.project);
        this.router.navigate(['/draft'], {queryParams: {edit: true}});
    }

    addComment(comment: Comment) {
        comment.projectId = this.project.id;
        console.log(comment);
        this.commentService.saveComment(comment).subscribe(
            responce => {
                if (!responce) {
                    for (let i = this.project.comments.length; i >= 0; ++i) {
                        if (this.project.comments[i].comment.content === comment.content) {
                            this.project.comments.splice(i, 1);
                        }
                    }
                }
            },
            error => {
                console.log(error);
            }
        );
    }

    isGuest(): boolean {
        if (!this.currentUser) return true;
        return false;
    }

    addRating() {
        if (!this.project.isRated) {
            console.log(this.project.rating);
            let rating = new Rating();
            rating.amount = this.project.rating;
            rating.userId = this.currentUser.id;
            rating.projectId = this.project.id;
            this.projectService.rate(rating).subscribe(response => {
                    this.project.rating = response.totalRating;
                    this.project.isRated = true;
                    console.log(response);
                },
                error => {
                    console.log(error);
                });
        }
    }

    public addPurchase() {
        if (this.inputSum === 0) {
            this.msgs = [];
            this.msgs.push({severity: 'error', summary: 'Error', detail: 'Error with purchasing'});
        } else {
            this.paymentService.addPayment(this.currentUser.id, this.id, this.inputSum).subscribe(
                response => {
                    this.project.currentSum = response;
                    this.project.countOfPayments++;
                    this.msgs = [];
                    this.msgs.push({severity: 'success', summary: 'Success', detail: 'Saved success'});
                }
            );
        }
    }

    isFollowed(): boolean {
        for (let project of this.currentUser.followedProjects) {
            if (project.id === this.id) return true
        }
        return false
    }

    subscribe() {
        this.userService.subscribe(this.currentUser.id, this.id).subscribe(
            response => {
                if (response) {
                    this.currentUser.followedProjects.push(this.project);
                    this.userService.saveUser(this.currentUser);
                    this.userService.setUser(this.currentUser);
                }
            }
        );
    }

    unsubscribe() {
        this.userService.unsubscribe(this.currentUser.id, this.id).subscribe(
            response => {
                let i = this.currentUser.followedProjects.indexOf(this.project);
                this.currentUser.followedProjects.splice(i, 1);
                this.userService.saveUser(this.currentUser);
                this.userService.setUser(this.currentUser);
            }
        )
    }
}
