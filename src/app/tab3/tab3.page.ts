import { Component } from '@angular/core';
import {ReportsService} from '../services/reports/reports.service';
import {UserService} from '../services/auth/user.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    private report:any = [];
    constructor(private reportService: ReportsService, private userService:UserService) {
        this.getReportsByReporter();
    }
    private getReportsByReporter(){
        let reporterID = this.userService.auth().id;
        this.reportService.reportsbyUser(reporterID);
    }

}
