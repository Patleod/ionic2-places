import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { AuthHttp, AuthConfig } from 'angular-jwt';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { HeaderContentComponent } from '../components/header-content/header-content';
import { Routes } from './app.routes';

const app:Array<any>=[MyApp];
const pages:Array<any> = Routes.getPages();
const components:Array<any> = [
  HeaderContentComponent,
];
const appIonicConfig = {
  mode: 'md',
  platforms: {
    ios: {
      tabsPlacement: 'top',
    }
  }
};

let storage = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'PBauth',
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('id_token')),
  }), http);
}

@NgModule({
  declarations: app.concat(pages).concat(components),
  imports: [
    IonicModule.forRoot(MyApp,appIonicConfig, Routes.getDeepLinkerConfig())
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    }
  ],
  bootstrap: [IonicApp],
  entryComponents: app.concat(pages),
})
export class AppModule {}
