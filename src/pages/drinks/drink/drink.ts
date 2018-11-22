import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html'
})
export class DrinkPage {

  item : string ="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get("str"); 
    console.log("into drink : " + this.item)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinkPage');
  }

}
