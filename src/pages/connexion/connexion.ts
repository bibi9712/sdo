import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnexionService } from './connexion.service';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})
export class ConnexionPage {

  loginForm: FormGroup;
	loginError: string;

	constructor(
		private navCtrl: NavController,
		private auth: ConnexionService,
		fb: FormBuilder
	) {
		this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  }
  
  login() {
		let data = this.loginForm.value;
		if (!data.email) {
			return;
		}
		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(TabsPage),
				error => this.loginError = error.message
			);
  }
  

  loginWithGoogle() {
		 this.auth.signInWithGoogle().then(
			 user => this.getTabPage(user));	
	}

	getTabPage(user: firebase.auth.UserCredential){
		localStorage.setItem("data",JSON.stringify(user))
		this.navCtrl.setRoot(TabsPage)
	}

}
