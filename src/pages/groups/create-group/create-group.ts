import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { entiteGroup } from '../group/entiteGroup';
import { GroupService } from '../groupService';

@Component({
  selector: 'page-create-group',
  templateUrl: 'create-group.html',
})
export class CreateGroupPage {

  public nom : string;
  public code : string;
  public codeConf : string;
  user:firebase.auth.UserCredential;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, public groupService :GroupService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateGroupPage');
  }

  createGroup(){
    console.log("mes valeurs de save group : "+ this.nom +" "+ this.code+" "+this.codeConf);
    let group = new entiteGroup;
    group.dateCreation = new Date();
    group.name = this.nom;
    group.code = this.code;

    this.groupService.saveGroup(group);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
