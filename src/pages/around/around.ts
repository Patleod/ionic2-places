import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapComponent } from '../../components/map/map';

/*
  Generated class for the Around page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-around',
  templateUrl: 'around.html'
})
export class AroundPage {
  @ViewChild(MapComponent) 
    private map: MapComponent;

  constructor(public navCtrl: NavController) {}

  
  ionViewDidLoad() {
    this.map.init(46.191348, 6.135793);
  }

}

