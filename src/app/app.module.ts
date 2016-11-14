import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PlacesPage } from '../pages/places/places';
import { FriendsPage } from '../pages/friends/friends';
import { AddPage } from '../pages/add/add';
import { AroundPage } from '../pages/around/around';
import { HeaderContentComponent } from '../components/header-content/header-content';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    PlacesPage,
    AroundPage,
    FriendsPage,
    AddPage,
    HeaderContentComponent
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
    FriendsPage,
    AddPage,
    HeaderContentComponent    
  ],
  providers: []
})
export class AppModule {}
