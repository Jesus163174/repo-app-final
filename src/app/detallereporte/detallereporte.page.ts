import { Component, OnInit } from '@angular/core';
import {ReportsService} from '../services/reports/reports.service';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {UserService} from '../services/auth/user.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detallereporte',
  templateUrl: './detallereporte.page.html',
  styleUrls: ['./detallereporte.page.scss'],
})
export class DetallereportePage implements OnInit {

  constructor(private reportServices:ReportsService, 
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private userService : UserService,
    private router: Router,
    private loadingController: LoadingController) { }

  ngOnInit() {
    
  }
  async presentActionSheet(report) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Noticias',
      buttons: [{
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
