import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { EntiteDrink } from '../drinks/drink/entiteDrink';


@Injectable()
export class SoftsService {
    constructor(private db: AngularFireDatabase){}

    getDrinks(){
        return this.db.list<EntiteDrink>('/drinks').valueChanges();
    }
}