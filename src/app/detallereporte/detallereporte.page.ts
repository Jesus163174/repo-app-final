import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ReportsService} from '../services/reports/reports.service';
@Component({
  selector: 'app-detallereporte',
  templateUrl: './detallereporte.page.html',
  styleUrls: ['./detallereporte.page.scss'],
})
export class DetallereportePage implements OnInit {
    private reportId:string = null;
    private report:any = [];
    private reporter:any = [];
    constructor(private activatedRoute: ActivatedRoute,private reportsService:ReportsService) { 
        this.reportId = this.activatedRoute.snapshot.paramMap.get('reportid');
        this.getReport(this.reportId);
    }

    ngOnInit() {
        
    }

    getReport(reportId){
        this.reportsService.getReport(reportId).subscribe((result)=>{
            this.report = result['report'];
            this.reporter = result['user'];
        },(error)=>{
            console.log(error.message);
        });
    }

}
