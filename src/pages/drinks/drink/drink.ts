import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EntiteDrink } from './entiteDrink';
import firebase from 'firebase';
import {SoftsService} from '../../softs/softs.service'
import { EntiteDrinkDto } from './entiteDrinkDto';
import { categorieEnum } from '../../../assets/utils/utilsCategorie';




@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html'
})
export class DrinkPage {

  storage = firebase.app().storage("gs://sdo0-4b11a.appspot.com");
  urlPicture : string;
  drink : EntiteDrinkDto;
  color :string;
  s:string ="S";

  constructor(public navCtrl: NavController, public navParams: NavParams, public soft: SoftsService) {
    this.drink = this.navParams.get("drink"); 

      if( this.drink.categorie== categorieEnum.SOFT){
        this.color = "secondary";
      }else{
        this.color = "danger";
        this.s = 'H';
      }

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinkPage');
  }

}
