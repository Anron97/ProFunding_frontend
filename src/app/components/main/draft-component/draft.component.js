"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var project_1 = require("../../../models/project");
var ng2_cloudinary_1 = require("ng2-cloudinary");
var finansalGoal_1 = require("../../../models/finansalGoal");
var DraftComponent = (function () {
    function DraftComponent() {
        var _this = this;
        this.project = new project_1.Project();
        this.goal = new finansalGoal_1.FinansalGoal("", "", 0);
        this.goals = [];
        this.uploader = new ng2_cloudinary_1.CloudinaryUploader(new ng2_cloudinary_1.CloudinaryOptions({ cloudName: 'profunding', uploadPreset: 'profunding' }));
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            console.log(item);
            var res = JSON.parse(response);
            _this.project.image = res.public_id;
            return { item: item, response: response, status: status, headers: headers };
        };
    }
    DraftComponent.prototype.load = function () {
        console.log("In load!");
        this.fileSelect.nativeElement.click();
    };
    DraftComponent.prototype.upload = function () {
        console.log("In upload!");
        this.uploader.uploadAll();
    };
    DraftComponent.prototype.addGoal = function () {
        this.goals.push(new finansalGoal_1.FinansalGoal(this.goal.title, this.goal.description, this.goal.cost));
    };
    return DraftComponent;
}());
__decorate([
    core_1.ViewChild('fileSelect')
], DraftComponent.prototype, "fileSelect", void 0);
DraftComponent = __decorate([
    core_1.Component({
        selector: 'app-draft',
        templateUrl: './draft.component.html',
        styleUrls: ['./draft.component.css'],
    })
], DraftComponent);
exports.DraftComponent = DraftComponent;
