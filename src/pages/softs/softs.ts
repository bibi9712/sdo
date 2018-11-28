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
    public drinkSwitch :string ;
    public soda: EntiteDrink[];
    public cocktails: EntiteDrink[];
    public bchaud: EntiteDrink[];

    public drinks: EntiteDrink[];

    constructor(public navCtrl: NavController, public soft: SoftsService, public cf:ChangeDetectorRef) {
      this.initialize();
      this.getDrinksFilter();
    }


    initialize(){
    this.drinkSwitch = "soda";
    this.soda = [];
    this.cocktails = [];
    this.bchaud = [];
    }

    getDrinksFilter(){
      this.soft.getDrinks().subscribe(res=>{
        res
        .filter(res=> res.type == "soft")
            .map(res => {
              if(res.sub_type == "cocktails"){
                this.cocktails.push(res);
              }
              else if(res.sub_type == "soda"){
                this.soda.push(res);
              }
              else if(res.sub_type == "bchaud"){
                this.bchaud.push(res);
              }
            })
    })
    }


    consulter(drink:EntiteDrink){
      console.log("dans la méthode consulter : " + drink)
      this.navCtrl.push(DrinkPage,{ "drink":drink});
    }

    segmentChanged()
    {
      this.cf.detectChanges();
    }
  }
  