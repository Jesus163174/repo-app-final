import { Component } from '@angular/core';
import {ReportsService} from '../services/reports/reports.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    private reports:any = [];
    constructor(
        private reportServices:ReportsService
    ) {
        this.getReports(0);
    }
    public getReports(reporter_id){
        this.reports = this.reportServices.reportsByReporter(reporter_id);
    }

}
