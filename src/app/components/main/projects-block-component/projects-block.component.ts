import { Component} from '@angular/core';

@Component({
    selector: 'projects-block',
    templateUrl: './projects-block.component.html',
    styleUrls: ['./projects-block.component.css']
})
export class ProjectsBlockComponent {
    // projects: UserProject[];
    // private defaultGetProject: string = "10";
    // private defaultSkipProject: string = "0";
    // public value: string;
    // public type: string;
    // public property: string;
    // public subscription: Subscription;
    //
    // constructor(private service: RestService, private activateRoute: ActivatedRoute) {
    //
    // }
    //// Для Тарасевича - если захочешь писать в этом методе(он вызывается после конструктора) для инициализации компонента
    //   то реализуй интерфейс OnInit
    // ngOnInit() {
    //     this.subscription = this.activateRoute.params.subscribe(params => {
    //         this.type = params['type'];
    //         this.property = params['property'];
    //         this.value = params['value'];
    //         if (this.property == null)
    //             this.property = "all";
    //         this.service.getProjects(this.property, this.type, this.value, this.defaultGetProject, this.defaultSkipProject)
    //             .subscribe(result => {
    //                 this.projects = result.json();
    //             })
    //     });
    // }
}
