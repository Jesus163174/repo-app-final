import { Component } from '@angular/core';
import {ReportsService} from '../services/reports/reports.service';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    private reports:any=null;
    constructor(
        private reportServices:ReportsService, public actionSheetController: ActionSheetController,
        public alertController: AlertController
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

    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
          header: 'Noticias',
          buttons: [{
            text: 'Eliminar',
            role: 'destructive',
            icon: 'trash',
            handler: () => {
              console.log('Delete clicked');
              this.presentAlertConfirm();
            }
          }, {
            text: 'Editar',
            icon: 'create',
            handler: () => {
              console.log('Favorite clicked');
              
            }
          }, {
            text: 'Cancelar',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }]
        });
        await actionSheet.present();
      }

      async presentAlertConfirm() {
        const alert = await this.alertController.create({
          header: '¿Estás seguro?',
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'Confirmar',
              handler: () => {
                console.log('Confirm Okay');
              }
            }
          ]
        });
    
        await alert.present();
      }
    
    

}
