import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Routes } from '../../app/app.routes';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  slidesOptions:Object={
    pager:true,
  };

  constructor(public navCtrl: NavController) {}

  goLogin(){
    this.navCtrl.push(Routes.getPage(Routes.LOGIN));
  }
  public GoTabs() {
    this.navCtrl.push(TabsPage);
  }
}
