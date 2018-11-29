import { Component,ChangeDetectorRef  } from '@angular/core';
import {NavController } from 'ionic-angular';
import {DrinkPage} from '../drinks/drink/drink'
import {SoftsService} from './softs.service'
import { EntiteDrink } from '../drinks/drink/entiteDrink';
import { Observable } from 'rxjs';
import { EntiteSubCategorie } from '../drinks/drink/entiteSubCategorie';

@Component({
    selector: 'page-softs',
    templateUrl: 'softs.html'
  })
  export class SoftsPage {
    public drinkSwitch :string ;
    public soda: EntiteDrink[];
    public cocktails: EntiteDrink[];
    public bchaud: EntiteDrink[];

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
      this.soft.getDrinks().subscribe(dr=>{
        dr.forEach(tr => {
          let categorie = this.soft.getCategorie(tr.categorie);
          let subCategorie = this.soft.getSubcategorie(tr.subCategorie);

          categorie.subscribe(cats => cats.forEach(cat => {
            if(cat.name == "soft"){
              this.dispatchSubCat(subCategorie,tr);
            }
          }))
        })
        
    }).unsubscribe;
    }


    consulter(drink:EntiteDrink){
      console.log("dans la méthode consulter : " + drink)
      this.navCtrl.push(DrinkPage,{ "drink":drink});
    }

    segmentChanged()
    {
      this.cf.detectChanges();
    }

    dispatchSubCat(subCategorie : Observable<EntiteSubCategorie[]>, tr : EntiteDrink){

      subCategorie.subscribe(zoe => zoe.forEach(res => {

        switch (res.name) {
          case "soda":
          this.soda.push(tr);
            break;
            case "cocktail":
            this.cocktails.push(tr);
              break;
              case "boisson chaude":
              this.bchaud.push(tr);
                break;
          default:
            break;
        }

      }))
    }
  }
  