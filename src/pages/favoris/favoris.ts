import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-favoris',
  templateUrl: 'favoris.html',
})
export class FavorisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  slides = [
    {
      title: "Welcome to Simple Drink Order",
      description: "BlaBla && easy pit",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "First connexion",
      description: "blabla bla... suivre step pour se créer un compte",
      image: "assets/img/ica-slidebox-img-2.png",
    }
  ];

}
