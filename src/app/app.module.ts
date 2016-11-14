import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PlacesPage } from '../pages/places/places';
import { FiendsPage } from '../pages/fiends/fiends';
import { AddPage } from '../pages/add/add';
import { AroundPage } from '../pages/around/around';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    PlacesPage,
    AroundPage,
    FiendsPage,
    AddPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    PlacesPage,
    AroundPage,
    FiendsPage,
    AddPage    
  ],
  providers: []
})
export class AppModule {}
