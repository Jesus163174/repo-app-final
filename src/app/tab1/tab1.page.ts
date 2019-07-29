import { Component } from '@angular/core';
import {ReportsService} from '../services/reports/reports.service';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {UserService} from '../services/auth/user.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    private reports:any=null;
    private dataUser:any = [];
    constructor(
        private reportServices:ReportsService, 
        private actionSheetController: ActionSheetController,
        private alertController: AlertController,
        private userService : UserService,
        private router: Router,
        private loadingController: LoadingController
    ){
        this.getReports(0);
        this.dataUser = this.userService.auth();
    }
    ionViewWillEnter() {
        this.getReports(0);
    }
    getReports(reporter_id){
        this.reportServices.getAllReports(reporter_id).subscribe((reports)=>{
            console.log(reports);
            this.reports = reports['reports'];
            console.log(this.reports);
        },(error)=>{
            alert("error: "+error.message)
        });
    }
    logout(){
        this.userService.logout();
        this.presentLoadingWithOptions();
        this.router.navigate(['/login']);
    }
    async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
          spinner: 'circles',
          duration: 1000,
          message: 'Cerrando sesión',
          translucent: true,
          cssClass: 'custom-class custom-loading'
        });
        return await loading.present();
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
