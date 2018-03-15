import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InputArrayPage } from '../pages/input-array/input-array'
import { DataMongodbPage } from '../pages/data-mongodb/data-mongodb'
import { DataMongodbService } from '../pages/data-mongodb/data-mongodb.services'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InputArrayPage,
    DataMongodbPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InputArrayPage,
    DataMongodbPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataMongodbService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
