import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavorisPage } from './favoris';
import {HeaderPage} from '../header/header';



@NgModule({
  declarations: [
    FavorisPage,
    HeaderPage
  ],
  imports: [
    IonicPageModule.forChild(FavorisPage),
  ],
  entryComponents :[
    FavorisPage,
    HeaderPage
  ]
})
export class FavorisPageModule {}
