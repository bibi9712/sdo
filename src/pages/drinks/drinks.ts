import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-drinks',
  templateUrl: 'drinks.html'
})
export class DrinksPage {

  public tap: number = 0;
  constructor(public navCtrl: NavController) {}

   tapEvent(e) {
    this.tap++;
    console.log("nombre de tap : "+ this.tap);
    console.log("Value passée en param : "+ e);
  }

}
