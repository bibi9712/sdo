import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {DrinksPage} from'./drinks';
import {DrinkPage} from'./drink/drink'

@NgModule({
  declarations: [
    DrinksPage,
    DrinkPage
  ],
  imports: [
    IonicPageModule.forChild(DrinksPage),
  ],
  entryComponents: [
    DrinksPage,
    DrinkPage
  ],
})
export class DrinksPageModule {}
