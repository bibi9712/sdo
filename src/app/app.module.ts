import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { TabsPage} from '../pages/tabs/tabs';
import {PopoverPage} from '../pages/header/PopoverPage';
import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from'angularfire2/database';

var config = {
  apiKey: "AIzaSyCL_H94pwAziUn0ecS4mzXqXLDHIHi9j5k",
  authDomain: "sdo0-4b11a.firebaseapp.com",
  databaseURL: "https://sdo0-4b11a.firebaseio.com",
  projectId: "sdo0-4b11a",
  storageBucket: "sdo0-4b11a.appspot.com",
  messagingSenderId: "763996009257"
};

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
