import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { EntiteDrink } from '../drinks/drink/entiteDrink';
import { EntiteCategorie } from '../drinks/drink/entiteCategorie';
import { EntiteSubCategorie } from '../drinks/drink/entiteSubCategorie';
import { EntitePrice } from '../drinks/drink/entitePrice';


@Injectable()
export class SoftsService {

    public drinks :EntiteDrink[] = [];
    public subs :EntiteSubCategorie[] = [];
    public cats :EntiteCategorie[] = [];
    public prices :EntitePrice[] = [];


    constructor(private db: AngularFireDatabase){}

    getDrinks() {
      return this.db.list<EntiteDrink>('/drinks').valueChanges();
    }

    getSubcategorie(subCategorie: number)  {
         return this.db.list<EntiteSubCategorie>('/subCategories', res => res.orderByChild("id").equalTo(subCategorie)).valueChanges()
      }

      getCategorie(categorie: number) {
        return  this.db.list<EntiteCategorie>('/categories', res => res.orderByChild("id").equalTo(categorie)).valueChanges()
      }

      getPrice(price : number){
         return   this.db.list<EntitePrice> ('/prices',res => res.orderByChild("id").equalTo(price)).valueChanges();
      }



}