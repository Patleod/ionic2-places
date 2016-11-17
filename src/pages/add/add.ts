import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';

/*
  Generated class for the Add page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  public name:        string;
  public description: string;
  public base64Image: string;
  
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AddPage Page');
  }
  
  onClickCamera() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.FILE_URI,
      targetWidth: 200,
      targetHeight: 200
    }).then((imagedata) => {
      this.base64Image = imagedata;
      /*this.base64Image = "data:image/jpeg; base64," + imagedata;*/
    }, (error) => {
      console.log("error ", error);
    })
  }
}
