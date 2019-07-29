import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../services/auth/user.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private user = {};
    constructor(
        private userService:UserService,
        private router: Router,
        public loadingController: LoadingController
    ){
        console.log(this.userService.auth())
        if(this.userService.isActive() == 'true')
            this.router.navigate(['tabs/tab1']);
    }
    ngOnInit() {}
    login(){
        if(this.user['email'] === undefined && this.user['password'] === undefined){
            alert("proporciona tus credenciales");
            return;
        }
        this.userService.login(this.user).subscribe((result)=>{
            this.user = {}
            this.userService.saveUserData(result);
            this.router.navigate(['tabs/tab1']);
            this.presentLoadingWithOptions();
        },(error)=>{
            alert("Email o password incorrectos");
        });
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
