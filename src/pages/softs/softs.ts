import { Component } from '@angular/core';
import {NavController } from 'ionic-angular';
import {DrinkPage} from '../drinks/drink/drink'

@Component({
    selector: 'page-softs',
    templateUrl: 'softs.html'
  })
  export class SoftsPage {
    public drinkSwitch :string = "cocktails";
    constructor(public navCtrl: NavController) {}

    consulter(item:string){
      console.log("dans la méthode consulter : " + item)
      this.navCtrl.push(DrinkPage,{ "str":item});
    }
  
  }
  