import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {DrinksPage} from'./drinks';
import {DrinkPage} from'./drink/drink';
import {HeaderPageModule} from '../header/header.module'

@NgModule({
  declarations: [
    DrinksPage,
    DrinkPage
  ],
  imports: [
    IonicPageModule.forChild(DrinksPage),
    HeaderPageModule
  ],
  entryComponents: [
    DrinksPage,
    DrinkPage
  ],
})
export class DrinksPageModule {}
