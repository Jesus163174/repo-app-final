import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReportsService {
    private reports:any = [];
    private api_url_reports:string = "https://magnacomunicaciones.com.mx/api/reports";
    constructor(private http: HttpClient) { }

    public getAllReports(reporter_id){
        return this.http.get(this.api_url_reports);
    } 
    public reportsbyUser(reporterID){
        let endpoint = "https://magnacomunicaciones.com.mx/api/report_by_user/"+reporterID;
        return this.http.get(endpoint);
    }
    public addReports(report){
        let nameReport  = report['nameReport'];
        let descripcion = report['descripcion'];
        let imagen      = report['imagen'];
        let usuario     = 2;
        return this.http.post(this.api_url_reports,{
            nameReport:nameReport,
            descripcion:descripcion,
            imagen:imagen,
            usuario:usuario
        },{
            headers:{
                'Content-Type':'application/json'
            }
        });
    }
    public updateReports(id,nameReport,descripcion){
        let endpoint = this.api_url_reports+"/"+id;
        return this.http.put(endpoint,{nameReport:nameReport,descripcion:descripcion});
    }
    public getReport(reportId){
        let endpoint = this.api_url_reports+"/"+reportId;
        return this.http.get(endpoint);
    }
}
