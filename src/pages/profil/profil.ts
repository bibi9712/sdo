import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EntiteUser } from './EntiteUser';
import { FormGroup, FormBuilder,  } from '@angular/forms';


@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  userFireBase:firebase.auth.UserCredential;
  user: EntiteUser;
  userForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb:FormBuilder) {
    this.userFireBase = JSON.parse(localStorage.getItem("data"));
    this.user = this.userFireBaseToUser(this.userFireBase);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  userFireBaseToUser(userFireBase : firebase.auth.UserCredential) : EntiteUser{
    console.log(userFireBase);
    let entiteUser :EntiteUser = new EntiteUser;

    entiteUser.id = userFireBase.user.uid;
    entiteUser.email = userFireBase.user.email;

    let values = userFireBase.user.displayName.split(" ");
    console.log(values);
    entiteUser.nom = values[1];
    entiteUser.prenom = values[0];
    entiteUser.urlPhoto = userFireBase.user.photoURL;
    console.log(entiteUser);
    return entiteUser;
  }

  uploadFile(){
    console.log("dans upload");
  }

}
