import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  rForm: FormGroup;
  post: any;
  name: string = '';
  email: string = '';
  age: string = '';

  

  constructor(private modalCtrl: ModalController, private fb: FormBuilder, public actionSheetController: ActionSheetController) { 
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'email': [null, Validators.required],
      'age': [null, Validators.required],
      'validate': ''
    });
  }
  addPost(post){
    console.log(this.rForm.value);
    this.modalCtrl.dismiss(this.rForm.value);
  
  }

  ngOnInit() {}

  dismissModal(){
    this.modalCtrl.dismiss({
      'dismissed': true

    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


}
