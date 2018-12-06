import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { entiteGroup } from './entiteGroup';

@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {
  group : entiteGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.group = this.navParams.get("str"); 
    console.log("into scontact : " + this.group)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
  }

  getUsers(idGroupe :string) :void {

  } 
  
}
