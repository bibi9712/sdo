import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-favoris',
  templateUrl: 'favoris.html',
})
export class FavorisPage {
  pet: string = "puppies";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
