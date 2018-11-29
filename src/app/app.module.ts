import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import{AngularFireDatabaseModule} from'angularfire2/database';
import{AngularFireModule} from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { MyApp } from './app.component';

/************ PAGES ***************/
import {ConnexionPage} from '../pages/connexion/connexion';
import {HeaderPage} from '../pages/header/header';
import {PopoverPage} from '../pages/header/PopoverPage';
import { TabsPage} from '../pages/tabs/tabs';
import {DrinksPage} from '../pages/drinks/drinks';
import {DrinkPage} from '../pages/drinks/drink/drink';
import {FavorisPage} from '../pages/favoris/favoris';
import {GroupsPage} from '../pages/groups/groups';
import {GroupPage} from '../pages/groups/group/group';
import { SoftsPage } from '../pages/softs/softs';
import {ProfilPage} from '../pages/profil/profil';
//import {} from '../pages/';

/************ SERVICES ***************/
import {ConnexionService} from '../pages/connexion/connexion.service';
import {SoftsService} from '../pages/softs/softs.service';


/************ BDD firebase***************/
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
    PopoverPage,
    HeaderPage,
    ConnexionPage,
    DrinksPage,
    DrinkPage,
    FavorisPage,
    GroupsPage,
    GroupPage,
    SoftsPage,
    ProfilPage
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
    PopoverPage,
    HeaderPage,
    ConnexionPage,
    DrinksPage,
    DrinkPage,
    FavorisPage,
    GroupsPage,
    GroupPage,
    SoftsPage,
    ProfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConnexionService,
    AngularFireAuth,
    SoftsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
