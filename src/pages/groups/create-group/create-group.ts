import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-create-group',
  templateUrl: 'create-group.html',
})
export class CreateGroupPage {

  public nom : string;
  public code : string;
  public codeConf : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateGroupPage');
  }

  createGroup(){
    console.log("mes valeurs de save group : "+ this.nom +" "+ this.code+" "+this.codeConf)
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
