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

@Component({
    selector: 'project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnDestroy {

    private id: number;
    private project: Project = new Project();
    private completionDate: String;
    private subscription: Subscription;
    private myProject = false;
    private currentUser;

    constructor(private activateRoute: ActivatedRoute,
                private projectService: ProjectService,
                private dateService: DateService,
                private tagService: TagsService,
                private userService: UserService,
                private router: Router,
                private commentService: CommentService) {
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
                    if (this.currentUser && this.currentUser.id === this.project.userId) {
                        this.myProject = true;
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
        this.router.navigate(['/draft'], { queryParams: {edit: true}});
    }

    addComment(comment: Comment) {
        comment.projectId = this.project.id;
        console.log(comment);
    }

}
