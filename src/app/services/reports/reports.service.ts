import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
    private reports:any = [];
    constructor() { }

    public reportsByReporter(reporter_id){
        this.reports = [
            {
                nameReport:"Presencia de lluvia",
                descripcion:"Presencia de lluvia en vía rápida #ChiapaDeCorzo - #SanCristobal, conduzca con cuidado.",
                fecha:"25-07-2019",
                imagen:"https://scontent.ftgz1-1.fna.fbcdn.net/v/t1.0-9/67820060_3082648831775615_1269592787964133376_n.jpg?_nc_cat=1&_nc_eui2=AeE9CHW9JuUYl3Mq9ETkb1R6CLaNqMUmtKO8FTzc0k_yxMmCqm9SuvjZqNWEjEWx-74RvG7VTHz1HktIH6MnWhGMqOYlDkwby4-aVi5Ezo5SKw&_nc_oc=AQm0913zxAcvUpWnFfjAYIINtMx69GhCT5id7z3ermLCUCbpWBb4rZM_BDW5oraG514&_nc_ht=scontent.ftgz1-1.fna&oh=daf831e863f6b024d990984bcd4a60dc&oe=5DE0A5A7",
                usurio:"Jesus Alberto Gonzalez Gutierrez"
            },
            {
                nameReport:"Presencia de lluvia",
                descripcion:"Presencia de lluvia en vía rápida #ChiapaDeCorzo - #SanCristobal, conduzca con cuidado.",
                fecha:"25-07-2019",
                imagen:"https://scontent.ftgz1-1.fna.fbcdn.net/v/t1.0-9/67820060_3082648831775615_1269592787964133376_n.jpg?_nc_cat=1&_nc_eui2=AeE9CHW9JuUYl3Mq9ETkb1R6CLaNqMUmtKO8FTzc0k_yxMmCqm9SuvjZqNWEjEWx-74RvG7VTHz1HktIH6MnWhGMqOYlDkwby4-aVi5Ezo5SKw&_nc_oc=AQm0913zxAcvUpWnFfjAYIINtMx69GhCT5id7z3ermLCUCbpWBb4rZM_BDW5oraG514&_nc_ht=scontent.ftgz1-1.fna&oh=daf831e863f6b024d990984bcd4a60dc&oe=5DE0A5A7",
                usurio:"Jesus Alberto Gonzalez Gutierrez"
            },
            {
                nameReport:"Presencia de lluvia",
                descripcion:"Presencia de lluvia en vía rápida #ChiapaDeCorzo - #SanCristobal, conduzca con cuidado.",
                fecha:"25-07-2019",
                imagen:"https://scontent.ftgz1-1.fna.fbcdn.net/v/t1.0-9/67820060_3082648831775615_1269592787964133376_n.jpg?_nc_cat=1&_nc_eui2=AeE9CHW9JuUYl3Mq9ETkb1R6CLaNqMUmtKO8FTzc0k_yxMmCqm9SuvjZqNWEjEWx-74RvG7VTHz1HktIH6MnWhGMqOYlDkwby4-aVi5Ezo5SKw&_nc_oc=AQm0913zxAcvUpWnFfjAYIINtMx69GhCT5id7z3ermLCUCbpWBb4rZM_BDW5oraG514&_nc_ht=scontent.ftgz1-1.fna&oh=daf831e863f6b024d990984bcd4a60dc&oe=5DE0A5A7",
                usurio:"Jesus Alberto Gonzalez Gutierrez"
            },
            {
                nameReport:"Presencia de lluvia",
                descripcion:"Presencia de lluvia en vía rápida #ChiapaDeCorzo - #SanCristobal, conduzca con cuidado.",
                fecha:"25-07-2019",
                imagen:"https://scontent.ftgz1-1.fna.fbcdn.net/v/t1.0-9/67820060_3082648831775615_1269592787964133376_n.jpg?_nc_cat=1&_nc_eui2=AeE9CHW9JuUYl3Mq9ETkb1R6CLaNqMUmtKO8FTzc0k_yxMmCqm9SuvjZqNWEjEWx-74RvG7VTHz1HktIH6MnWhGMqOYlDkwby4-aVi5Ezo5SKw&_nc_oc=AQm0913zxAcvUpWnFfjAYIINtMx69GhCT5id7z3ermLCUCbpWBb4rZM_BDW5oraG514&_nc_ht=scontent.ftgz1-1.fna&oh=daf831e863f6b024d990984bcd4a60dc&oe=5DE0A5A7",
                usurio:"Jesus Alberto Gonzalez Gutierrez"
            },
            {
                nameReport:"Presencia de lluvia",
                descripcion:"Presencia de lluvia en vía rápida #ChiapaDeCorzo - #SanCristobal, conduzca con cuidado.",
                fecha:"25-07-2019",
                imagen:"https://scontent.ftgz1-1.fna.fbcdn.net/v/t1.0-9/67820060_3082648831775615_1269592787964133376_n.jpg?_nc_cat=1&_nc_eui2=AeE9CHW9JuUYl3Mq9ETkb1R6CLaNqMUmtKO8FTzc0k_yxMmCqm9SuvjZqNWEjEWx-74RvG7VTHz1HktIH6MnWhGMqOYlDkwby4-aVi5Ezo5SKw&_nc_oc=AQm0913zxAcvUpWnFfjAYIINtMx69GhCT5id7z3ermLCUCbpWBb4rZM_BDW5oraG514&_nc_ht=scontent.ftgz1-1.fna&oh=daf831e863f6b024d990984bcd4a60dc&oe=5DE0A5A7",
                usurio:"Jesus Alberto Gonzalez Gutierrez"
            },
            {
                nameReport:"Presencia de lluvia",
                descripcion:"Presencia de lluvia en vía rápida #ChiapaDeCorzo - #SanCristobal, conduzca con cuidado.",
                fecha:"25-07-2019",
                imagen:"https://scontent.ftgz1-1.fna.fbcdn.net/v/t1.0-9/67820060_3082648831775615_1269592787964133376_n.jpg?_nc_cat=1&_nc_eui2=AeE9CHW9JuUYl3Mq9ETkb1R6CLaNqMUmtKO8FTzc0k_yxMmCqm9SuvjZqNWEjEWx-74RvG7VTHz1HktIH6MnWhGMqOYlDkwby4-aVi5Ezo5SKw&_nc_oc=AQm0913zxAcvUpWnFfjAYIINtMx69GhCT5id7z3ermLCUCbpWBb4rZM_BDW5oraG514&_nc_ht=scontent.ftgz1-1.fna&oh=daf831e863f6b024d990984bcd4a60dc&oe=5DE0A5A7",
                usurio:"Jesus Alberto Gonzalez Gutierrez"
            },
            {
                nameReport:"Presencia de lluvia",
                descripcion:"Presencia de lluvia en vía rápida #ChiapaDeCorzo - #SanCristobal, conduzca con cuidado.",
                fecha:"25-07-2019",
                imagen:"https://scontent.ftgz1-1.fna.fbcdn.net/v/t1.0-9/67820060_3082648831775615_1269592787964133376_n.jpg?_nc_cat=1&_nc_eui2=AeE9CHW9JuUYl3Mq9ETkb1R6CLaNqMUmtKO8FTzc0k_yxMmCqm9SuvjZqNWEjEWx-74RvG7VTHz1HktIH6MnWhGMqOYlDkwby4-aVi5Ezo5SKw&_nc_oc=AQm0913zxAcvUpWnFfjAYIINtMx69GhCT5id7z3ermLCUCbpWBb4rZM_BDW5oraG514&_nc_ht=scontent.ftgz1-1.fna&oh=daf831e863f6b024d990984bcd4a60dc&oe=5DE0A5A7",
                usurio:"Jesus Alberto Gonzalez Gutierrez"
            },
            {
                nameReport:"Presencia de lluvia",
                descripcion:"Presencia de lluvia en vía rápida #ChiapaDeCorzo - #SanCristobal, conduzca con cuidado.",
                fecha:"25-07-2019",
                imagen:"https://scontent.ftgz1-1.fna.fbcdn.net/v/t1.0-9/67820060_3082648831775615_1269592787964133376_n.jpg?_nc_cat=1&_nc_eui2=AeE9CHW9JuUYl3Mq9ETkb1R6CLaNqMUmtKO8FTzc0k_yxMmCqm9SuvjZqNWEjEWx-74RvG7VTHz1HktIH6MnWhGMqOYlDkwby4-aVi5Ezo5SKw&_nc_oc=AQm0913zxAcvUpWnFfjAYIINtMx69GhCT5id7z3ermLCUCbpWBb4rZM_BDW5oraG514&_nc_ht=scontent.ftgz1-1.fna&oh=daf831e863f6b024d990984bcd4a60dc&oe=5DE0A5A7",
                usurio:"Jesus Alberto Gonzalez Gutierrez"
            },
            {
                nameReport:"Presencia de lluvia",
                descripcion:"Presencia de lluvia en vía rápida #ChiapaDeCorzo - #SanCristobal, conduzca con cuidado.",
                fecha:"25-07-2019",
                imagen:"https://scontent.ftgz1-1.fna.fbcdn.net/v/t1.0-9/67820060_3082648831775615_1269592787964133376_n.jpg?_nc_cat=1&_nc_eui2=AeE9CHW9JuUYl3Mq9ETkb1R6CLaNqMUmtKO8FTzc0k_yxMmCqm9SuvjZqNWEjEWx-74RvG7VTHz1HktIH6MnWhGMqOYlDkwby4-aVi5Ezo5SKw&_nc_oc=AQm0913zxAcvUpWnFfjAYIINtMx69GhCT5id7z3ermLCUCbpWBb4rZM_BDW5oraG514&_nc_ht=scontent.ftgz1-1.fna&oh=daf831e863f6b024d990984bcd4a60dc&oe=5DE0A5A7",
                usurio:"Jesus Alberto Gonzalez Gutierrez"
            }
        ];
        return this.reports;
    } 
}
