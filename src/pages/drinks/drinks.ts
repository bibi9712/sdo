import { Component } from '@angular/core';
import {NavController } from 'ionic-angular';
import {SoftsPage} from '../softs/softs'

@Component({
  selector: 'page-drinks',
  templateUrl: 'drinks.html'
})
export class DrinksPage {

  className:string = 'active';

  pet: string = "softs";

  constructor(public navCtrl: NavController) {}

  gotoSoft(){
    console.log("dans la méthode gotoSoft");
    this.navCtrl.push(SoftsPage);
  }

  gotoAlcool(){

  }
}
