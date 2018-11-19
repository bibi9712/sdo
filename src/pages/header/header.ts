import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, PopoverController, IonicPage } from 'ionic-angular';
import {PopoverPage} from './PopoverPage';

@Component({
  selector: 'header',
  templateUrl: 'header.html',
})
export class HeaderPage {

  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;    

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private popoverCtrl: PopoverController) {
  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: ev
    });
  }

}
