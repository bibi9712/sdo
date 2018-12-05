import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PanierService} from '../panier/panierService'
import { Order } from '../panier/order';

@Component({
  selector: 'page-favoris',
  templateUrl: 'favoris.html',
})
export class FavorisPage {
  user:firebase.auth.UserCredential;
  orders: Order[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public panierService :PanierService) {
  this.getOrders();
  }

  getOrders(){

    this.user = JSON.parse(localStorage.getItem("data"));
    this.panierService.getOrders(this.user.user.uid)
    .subscribe(orders=>{
      this.orders = orders;
      console.log(orders);
    } );
  }
}
