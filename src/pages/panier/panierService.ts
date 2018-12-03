import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { EntiteDrinkDto } from '../drinks/drink/entiteDrinkDto';


@Injectable()
export class PanierService {

    public drinks :EntiteDrinkDto[] = [];
    constructor(){}

    addArticle(drink: EntiteDrinkDto) {
        if(this.drinks.length == 0){
            this.drinks.push(drink);
        }else{
            this.drinks
            .filter(dr => dr. name == drink.name)
            .forEach(dr=>{
                dr.quantite +=1;
            });
        }
   console.log("dans la méthode add : "+ this.drinks.length)
   console.log(this.drinks);

    }

    removeArticle(drink:EntiteDrinkDto)  {

        if(this.drinks.length  > 0){
            this.drinks
            .filter(dr=> dr.name == drink.name)
            .forEach(dr=>{
                dr.quantite -=1;
            })
        }
        this.drinks = this.drinks.filter(dr=> dr.quantite >0);

            console.log("dans la méthode remove : "+ this.drinks.length)
            console.log(this.drinks);
      }

      getDrinks(){
          return this.drinks;
      }

}