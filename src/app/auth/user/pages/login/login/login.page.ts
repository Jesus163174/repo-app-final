import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../../services/auth/user.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private user = {};
    constructor(private userService:UserService,private router: Router,public loadingController: LoadingController) { }

    login(){
        this.userService.login(this.user).subscribe((result)=>{
            this.router.navigate(['tabs/tab1']);
            this.presentLoadingWithOptions();
        },(error)=>{
            console.log(error.message);
        });
    }

    ngOnInit() {
    }

    async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
          spinner: 'circles',
          duration: 1000,
          message: 'Logeado correctamente',
          translucent: true,
          cssClass: 'custom-class custom-loading'
        });
        return await loading.present();
    }

}
