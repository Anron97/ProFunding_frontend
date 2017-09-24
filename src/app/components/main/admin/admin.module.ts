import {NgModule} from "@angular/core";
import {
    ConfirmationService, ConfirmDialogModule, DataTableModule, DialogModule, DropdownModule,
    SharedModule
} from "primeng/primeng";
import {CommonModule} from "@angular/common";
import {AdminComponent} from "./admin.component";
import {AdminService} from "../../../services/admin.service";



@NgModule({
    imports: [
        CommonModule,
        DataTableModule,
        SharedModule,
        DropdownModule,
        ConfirmDialogModule,
        DialogModule
    ],
    providers: [ConfirmationService, AdminService],
    declarations: [ AdminComponent ],
    exports: []
})
export class AdminModule {
}
