import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Settings } from '../../providers/settings';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage implements OnInit {

  public mySettings; any;
  
  constructor(public navCtrl: NavController, public settings: Settings) {}

  ngOnInit() {
    debugger;
    this.mySettings = this.settings.settings;
  }

  ionViewDidLoad() {
    console.log('Hello SettingsPage Page');
  }
  

}
