import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth } from '../../providers/auth';

/*
  Generated class for the Places page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class PlacesPage implements OnInit {
  
  public places: Array<any> = new Array<any>();
  public error: string;
  
  constructor(public navCtrl: NavController, public auth: Auth) {}

  ionViewDidLoad() {
    console.log('Hello PlacesPage Page');
  }
  
  ngOnInit() {
    this.getPlaces();
  }
  
  public getPlaces() {
    this.auth.getPlaces()
      .subscribe(
        places => {
          this.places = places;
          console.debug('places : ' + places + ' found !');
        },
        err => this.error = err,
        () => console.debug('Observable getPlaces terminated !!')
      )
  }

}
