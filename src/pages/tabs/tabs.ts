import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacesPage } from '../places/places'
import { AddPage } from '../add/add'
import { AroundPage } from '../around/around'
import { FiendsPage } from '../fiends/fiends'

/*
  Generated class for the Tabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = PlacesPage;
  tab2Root: any = AddPage;
  tab3Root: any = AroundPage;
  tab4Root: any = FiendsPage;

  constructor(public navCtrl: NavController) {

  }

}