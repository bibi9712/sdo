import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EntiteDrink } from './entiteDrink';
import firebase from 'firebase';




@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html'
})
export class DrinkPage {

  drink : EntiteDrink;
  color :string;
  s:string ="S";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.drink = this.navParams.get("drink"); 
    console.log("into drink : " + this.drink)
    if(this.drink.type == "soft"){
      this.color = "secondary";
    }else{
      this.color = "danger";
    }
    /*var storage = firebase.app().storage("gs://sdo0-4b11a.appspot.com");
    var storageRef = storage.ref();
    var spaceRef = storageRef.child('img.jpg');
    console.log(spaceRef);
*/
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinkPage');
  }

}
