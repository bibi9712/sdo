import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { EntiteUser } from '../profil/EntiteUser';
import { Storage } from '@ionic/storage';
import { ConnexionService } from './connexion.service'
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})
export class ConnexionPage {

  user: EntiteUser;


  private opt: string = 'signin';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage, public connexionService: ConnexionService,
    public toastctrl: ToastController,
    public fireBase: AngularFireDatabase) {
    this.initializeUser();
    this.getStorage();
  }

  initializeUser() {
    this.user = new EntiteUser;
    this.user.pseudo = 'maxzou';
    this.user.password = 'pilou';
  }
  getStorage() {
    this.storage.get('user').then(us => this.user == us);
    if (this.user.pseudo == '' && this.user.password == '') {
      this.opt = 'signup';
    }
  }

  ionViewDidLoad() {
    if (this.user.pseudo == '' && this.user.password == '') {
      this.opt = 'signup';
    }
  }

  doLogin() {
    let liste =  this.connexionService.getUses();
    liste.subscribe(
      data =>   {
          let userfind = data.find(ose=> ose.password == this.user.password )
          if (userfind != null) {
            this.storage.set('user', userfind);
            this.navCtrl.push(TabsPage);
          }
          else {
            this.getErrorDoLogin();
          }
      }
     );
  }

  doSignUp() {
    if (this.user.pseudo == '' || this.user.password == '') {
      this.getErrorDoLogin();
    } else {
      this.connexionService.addUser(this.user);
      this.storage.set('user', this.user);
      this.navCtrl.push(TabsPage);
    }

  }

  getErrorDoLogin() {
    let toast = this.toastctrl.create({
      message: 'Log or Password wrong',
      duration: 3000,
      position: 'top'
    }

    );
    toast.present();
  }
}