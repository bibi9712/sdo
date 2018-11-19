import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavorisPage } from './favoris';
import {HeaderPageModule} from '../header/header.module';

@NgModule({
  declarations: [
    FavorisPage,
  ],
  imports: [
    IonicPageModule.forChild(FavorisPage),HeaderPageModule
  ],
  entryComponents :[
    FavorisPage,
  ]
})
export class FavorisPageModule {}
