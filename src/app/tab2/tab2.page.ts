import { Component, OnInit } from '@angular/core';
import {ReportsService} from '../services/reports/reports.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

    image: string = null;
    public reportes = {};
    constructor( 
        
        private navCtrl: NavController,
        private reportService:ReportsService,
        private router: Router
    ) { 
    }
    
    public takePicture(){
        
    }

    addReport(){
        this.reportService.addReports(this.reportes).subscribe((data)=>{
            this.navCtrl.navigateRoot(['/tabs/tab1']);
        },error => alert(error.message));        
    }

    ngOnInit() {}

    

}
