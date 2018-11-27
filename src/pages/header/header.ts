import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import {PopoverPage} from './PopoverPage';
import * as firebase from 'firebase/app';

@Component({
  selector: 'header',
  templateUrl: 'header.html',
})
export class HeaderPage {
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;    

  user:firebase.auth.UserCredential;
  name: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private popoverCtrl: PopoverController) {
      this.user = JSON.parse(localStorage.getItem("data"));
      this.name = this.user.user.displayName;
      console.log(this.name)
  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: ev
    });
  }

}
