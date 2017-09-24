import {Component, OnInit} from "@angular/core";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import {ConfirmationService, SelectItem} from "primeng/primeng";
import {AdminService} from "../../../services/admin.service";

@Component({
    selector: 'admin-component',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
})

export class AdminComponent implements OnInit {

    private users: User[];
    private selectedUsers: User[] = [];
    private roles: SelectItem[];
    private display = false;
    private currentConfirmUser: User = new User();


    constructor(private userService: UserService,
                private confirmationService: ConfirmationService,
                private adminService: AdminService) {
    }

    ngOnInit(): void {
        this.adminService.getUsers().subscribe(
            response => {
                this.users = response;
            },
            error => console.log(error)
        );
        this.roles = [];
        this.roles.push({label: "ALL ROLES", value: null})
        this.roles.push({label: 'ADMIN', value: 'ADMIN'});
        this.roles.push({label: 'CONFIRMED USER', value: 'CONFIRMED USER'});
        this.roles.push({label: 'UNCONFIRMED USER', value: 'UNCONFIRMED USER'});
    }

    deleteUsers() {
        this.confirmationService.confirm({
            message: 'Do you want to delete ' + this.selectedUsers.length + ' users?',
            header: 'Delete users',
            icon: 'fa fa-trash',
            accept: () => {
                this.adminService.deleteUsers(this.selectedUsers)
            },
            reject: () => {
            }
        })
    }

    blockUsers() {
        this.adminService.blockUsers(this.selectedUsers).subscribe(
            response => {
                console.log(response);
            }
        );
    }

    unblockUsers() {
        this.adminService.unblockUsers(this.selectedUsers).subscribe(
            response => {
                console.log(response);
            }
        );
    }

    showConfirmWindow(user: User) {
        console.log(user);
        this.currentConfirmUser = user;
        this.display = true;
    }
}
