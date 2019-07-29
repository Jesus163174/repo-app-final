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
    async presentActionSheet(report) {
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
              this.presentAlertPrompt(report);
            }
            },{
              text: 'Detalle',
              icon: 'eye',
              handler: () => {
                console.log('Favorite clicked');
                this.router.navigate([`/detallereporte/${report.id}`]);
              
                
              },
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

      async presentAlertPrompt(report) {
        const alert = await this.alertController.create({
          header: 'Editar Noticia',
          inputs: [
            {
              name: 'name',
              type: 'text',
              value: report.nameReport,
              placeholder: 'Nombre'
            },
            {
              name: 'desc',
              type: 'text',
              value: report.descripcion,
              placeholder: 'Descripción'
            },
          ],
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Cancelar');
              }
            }, {
              text: 'Guardar',
              handler: data => {
                console.log('Confirm Ok');
                console.log(data.name);
                console.log(data.desc);
              }
            }
          ]
        });
    
        await alert.present();
      }
    
    

}
