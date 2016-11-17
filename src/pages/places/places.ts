import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Places } from '../../providers/places';

/*
  Generated class for the Places page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class PlacesPage {
  
  public places: Array<any> = new Array<any>();
  public error: string;
  
  constructor(public navCtrl: NavController, public placesProv: Places) {
    placesProv.load().then((data) => this.places = data);
  }

  ionViewDidLoad() {
    console.log('Hello PlacesPage Page');
  }
  
  /*public getPlaces() {
    this.auth.getPlaces()
      .subscribe(
        places => {
          this.places = places;
          console.debug('places : ' + places + ' found !');
        },
        err => this.error = err,
        () => console.debug('Observable getPlaces terminated !!')
      )
  }*/

}
