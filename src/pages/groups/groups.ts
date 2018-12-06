import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GroupPage} from './group/group'
import { entiteGroup } from './group/entiteGroup';
import { ModalController } from 'ionic-angular';
import { CreateGroupPage } from './create-group/create-group';


@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {
  public groups : entiteGroup[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsPage');
  }

  consulter(group: entiteGroup){
    console.log("dans la méthode consulter : " + group)
    this.navCtrl.push(GroupPage,{ "str":group});
  }

  removeItem(){
    
  }

  createGroup(){
    const modal = this.modalCtrl.create(CreateGroupPage);
    modal.present();
  }


}
