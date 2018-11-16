import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GroupPage} from './group/group'

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsPage');
  }

  consulter(item:string){

    console.log("dans la méthode consulter : " + item)
    this.navCtrl.push(GroupPage,{ "str":item});
  }

  removeItem(){
    
  }


}
