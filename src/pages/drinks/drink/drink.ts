import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EntiteDrink } from './entiteDrink';
import firebase from 'firebase';




@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html'
})
export class DrinkPage {

  storage = firebase.app().storage("gs://sdo0-4b11a.appspot.com");
  urlPicture : string;

  drink : EntiteDrink;
  color :string;
  s:string ="S";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.drink = this.navParams.get("drink"); 

    if(this.drink.type == "soft"){
      this.color = "secondary";
    }else{
      this.color = "danger";
    }
 
this.storage.ref('img.jpg').getDownloadURL().then(res => {
  this.drink.image = res; 
  console.log(res);
});

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinkPage');
  }

}
