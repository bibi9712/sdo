import { Component,ChangeDetectorRef  } from '@angular/core';
import {NavController } from 'ionic-angular';
import {DrinkPage} from '../drinks/drink/drink'
import {SoftsService} from './softs.service'
import { EntiteDrink } from '../drinks/drink/entiteDrink';
import { EntiteDrinkDto } from '../drinks/drink/entiteDrinkDto';
import { categorieEnum, SubCategorieEnum } from '../../assets/utils/utilsCategorie';
import {PanierService} from '../panier/panierService';


@Component({
    selector: 'page-softs',
    templateUrl: 'softs.html'
  })
  export class SoftsPage {
    public drinkSwitch :string ;
    public soda: EntiteDrinkDto[];
    public cocktails: EntiteDrinkDto[];
    public bchaud: EntiteDrinkDto[];

    constructor(public navCtrl: NavController, public soft: SoftsService, public cf:ChangeDetectorRef, public panierService :PanierService) {
      this.initialize();
      this.getDrinksFilter();
    }

    segmentChanged()
    {
      this.cf.detectChanges();
    }

    initialize(){
    this.drinkSwitch = "soda";
    this.soda = [];
    this.cocktails = [];
    this.bchaud = [];
    }

    consulter(drink:EntiteDrinkDto){
      console.log("dans la méthode consulter : " + drink)
      this.navCtrl.push(DrinkPage,{ "drink":drink});
    }


    getDrinksFilter(){
      this.soft.getDrinks().subscribe(drinks=> drinks.forEach(drink=>{
        let cats = this.soft.getCategorie(drink.categorie);
        let subs = this.soft.getSubcategorie(drink.subCategorie);
        let prices = this.soft.getPrice(drink.categorie);
        let dto = this.DrinkToDto(drink,cats,subs,prices)
        this.dispatchSoft(drink,dto);
      }));
    }

 

    dispatchSoft( drink : EntiteDrink, dto){
      if(drink.categorie == categorieEnum.SOFT){
        switch (drink.subCategorie) {
          case SubCategorieEnum.SODA:
          this.soda.push(dto);
            break;
            case SubCategorieEnum.COCKTAIL:
            this.cocktails.push(dto);
              break;
              case SubCategorieEnum.BCHAUD:
              this.bchaud.push(dto);
                break;
          default:
            break;
        }
      }
    }

DrinkToDto(value,cats,subs,prices): EntiteDrinkDto{
      let entiteDrinkDto = new EntiteDrinkDto;
      
prices.subscribe(prices=>  prices.forEach(price=>{
  entiteDrinkDto.montant = price.montant;
}));

 
cats.subscribe(cats=>cats.forEach(cat=>{
  entiteDrinkDto.categorie = cat.name;
}));
  
subs.subscribe(subs=> subs.forEach(sub=>{
  entiteDrinkDto.subCategorie = sub.name;
}));
     
      entiteDrinkDto.name = value.name;
      entiteDrinkDto.description = value.description;
      entiteDrinkDto.icon = value.icon;
      entiteDrinkDto.image = value.image;
      entiteDrinkDto.quantite = 0;
      return entiteDrinkDto;
    }

 removeArticle(drink : EntiteDrinkDto){
  this.panierService.removeArticle(drink);

 }

 addArticle(drink : EntiteDrinkDto){
  this.panierService.addArticle(drink);
}

   
  }
  