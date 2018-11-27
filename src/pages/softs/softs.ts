import { Component,ChangeDetectorRef  } from '@angular/core';
import {NavController } from 'ionic-angular';
import {DrinkPage} from '../drinks/drink/drink'
import {SoftsService} from './softs.service'
import { EntiteDrink } from '../drinks/drink/entiteDrink';

@Component({
    selector: 'page-softs',
    templateUrl: 'softs.html'
  })
  export class SoftsPage {
    public drinkSwitch :string = "bchaud";
    public cocktails: EntiteDrink[];

    constructor(public navCtrl: NavController, public soft: SoftsService, public cf:ChangeDetectorRef) {

    this.soft.getSoftsDrinks().valueChanges().subscribe(drinks => {
      this.cocktails = drinks;
    });

  
    }

    consulter(item:string){
      console.log("dans la méthode consulter : " + item)
      this.navCtrl.push(DrinkPage,{ "str":item});
    }

    segmentChanged()
    {
      this.cf.detectChanges();
    }
  
  }
  