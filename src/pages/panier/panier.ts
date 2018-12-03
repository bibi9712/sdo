import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {PanierService} from '../panier/panierService';
import { EntiteDrinkDto } from '../drinks/drink/entiteDrinkDto';

@Component({
  selector: 'page-panier',
  templateUrl: 'panier.html',
})
export class PanierPage {
  public drinks : EntiteDrinkDto[];

  constructor(public navCtrl: NavController, public navParams: NavParams ,public panierService:PanierService) {
    this.drinks = this.panierService.getDrinks();
  }
}
