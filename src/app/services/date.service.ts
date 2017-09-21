import {Injectable} from "@angular/core";

@Injectable()
export class DateService {

    formatDate(date: Date) {
        let dd: number = date.getDate();
        let mm: number = date.getMonth() + 1;
        let yyyy = date.getFullYear();
        let days: String = '' + dd;
        let mounth: String = '' + mm;
        let years: String = '' + yyyy;
        if (dd < 10) days = '0' + dd;
        if (+mm < 10) mounth = '0' + mm;
        return days + '.' + mounth + '.' + years;
    }

    leftDate(date: Date): number {
        let timeNow = new Date();
        if (date.getTime() <= timeNow.getTime()) return 0;
        return Math.round((date.getTime() - timeNow.getTime()) / 1000 / 60 / 60 / 24);
    }
}
