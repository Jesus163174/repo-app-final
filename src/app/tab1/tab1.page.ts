import { Component } from '@angular/core';
import {ReportsService} from '../services/reports/reports.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    private reports:any=null;
    constructor(
        private reportServices:ReportsService
    ) {
        this.getReports(0);
    }
    ngOnInit(){
        this.getReports(0);
    }
    ionViewWillEnter() {
        this.getReports(0);
    }
    getReports(reporter_id){
        
        //this.reports = this.reportServices.reportsByReporter(reporter_id);
        this.reportServices.reportsByReporter(reporter_id).subscribe((reports)=>{
            console.log(reports);
            this.reports = reports['reports'];
            console.log(this.reports);
        },(error)=>{
            alert("error: "+error.message)
            alert("error");
        });
    }
    

}
