import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../../services/auth/user.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    public user = {};
    constructor(private router: Router,public loadingController: LoadingController,private userService: UserService) { }

    public validate(){
        if(
            this.user['name'] === undefined &&
            this.user['apellido'] === undefined &&
            this.user['password'] === undefined &&
            this.user['rol'] === undefined
        )
            return false;
    }

    register(){
        if(this.validate() == false){
            alert("Proporciona todos tus datos");
            return;
        }
        this.userService.register(this.user).subscribe((result)=>{
           this.presentLoadingWithOptions();
           this.userService.saveUserData(result);
           console.log("registro: "+JSON.stringify(result));
           this.router.navigate(['tabs/tab1']);
        },(error)=>{
           alert("Error al registrarse");
        });
    }
    ngOnInit() {
    }

    async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
          spinner: 'circles',
          duration: 1000,
          message: 'Registrado correctamente',
          translucent: true,
          cssClass: 'custom-class custom-loading'
        });
        return await loading.present();
    }

}
