import { Injectable } from '@angular/core';
import { EntiteDrinkDto } from '../drinks/drink/entiteDrinkDto';
import firebase from 'firebase';
import { Order } from './order';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class PanierService {

    public drinks :EntiteDrinkDto[] = [];
    user:firebase.auth.UserCredential;
    montantOrder : number;

    ref = firebase.database().ref('orders/');



    constructor(private db: AngularFireDatabase){
        this.montantOrder = 0;
    }

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

      getMontantOrder() : number{
          this.drinks.forEach(dr=>{
                this.montantOrder += dr.montant;
          })

          return this.montantOrder;
      }

      saveOrder(){
         let order = this.createOrder();
         this.ref.push(order);
      }

      createOrder(){
        let  order = new Order();
        this.user = JSON.parse(localStorage.getItem("data"));
        console.log(this.user);
        order.user = this.user.user.uid;
        order.drinks = this.drinks;
        order.montant = this.getMontantOrder();
        return order;
      }

      

  getOrders(uid: string) {
    return this.db.list<Order>('/orders', res => res.orderByChild("user").equalTo(uid)).valueChanges();
}

}