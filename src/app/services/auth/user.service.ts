import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
    private url_api_login:string = "https://magnacomunicaciones.com.mx/api/users/";
    constructor(private http: HttpClient) { }

    login(user){
        let endpoint = this.url_api_login+"login";
        return this.http.post(endpoint,{
            email:user['email'],
            password:user['password']
        },{
            headers:{
                
            }
        });
    }
    register(user){
        let endpoint = this.url_api_login+"register";
        return this.http.post(endpoint,{
            email:user['email'],
            password:user['password'],
            rol:user['rol'],
            bussine_id:1,
            celular:"0000000",
            name:user['name']+' '+user['apellido']
        },{
            headers:{

            }
        })
    }
}
