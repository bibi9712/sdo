import { Component} from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {ConnexionPage} from '../connexion/connexion';
import { ProfilPage } from '../profil/profil';
import { PanierPage } from '../panier/panier';


@Component({
  selector: 'pop',
  templateUrl: 'pop.html',
})
export class PopoverPage {

    constructor(public viewCtrl: ViewController, public navCtrl: NavController,
      public storage : Storage){}

    close() {
      this.viewCtrl.dismiss();
    }

    doLogOut(){
      this.navCtrl.push(ConnexionPage);
    }

    doProfil(){
      this.navCtrl.push(ProfilPage);
    }

    goPanier(){
      this.navCtrl.push(PanierPage);
    }
    
}
