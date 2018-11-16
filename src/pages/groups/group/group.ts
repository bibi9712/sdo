import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {
  item : string ="";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get("str"); 
    console.log("into scontact : " + this.item)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
  }

  getUsers(idGroupe :string) :void {

  } 
  
}
