import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../../pages/tabs/tabs';

/*
  Generated class for the HeaderContent component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'header-content',
  templateUrl: 'header-content.html'
})
export class HeaderContentComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello HeaderContent Component');
    this.text = 'Hello World';
  }

  public onClickMenu() {
    this.navCtrl.push(TabsPage);
  }
}
