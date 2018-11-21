import { Component } from '@angular/core';
import {NavController } from 'ionic-angular';
import {  interval, timer } from 'rxjs';

@Component({
  selector: 'page-drinks',
  templateUrl: 'drinks.html'
})
export class DrinksPage {

  className:string = 'active';

  pet: string = "softs";

  constructor(public navCtrl: NavController) {}

  changeClass(value:string){
    console.log(value);

    if(value == "alcool"){
      let shades = document.getElementById(value);
      shades.classList.add('active')
      console.log(shades.classList);

      let shades2 = document.getElementById("sinAlcool");
      shades2.classList.remove('active')
      console.log(shades2.classList);

      const source = timer(500);
      source.subscribe(val => {
        let fond = document.getElementById("out");
        fond.classList.add('active')

        let fond2 = document.getElementById("in");
        fond2.classList.remove('active')
       
}
  );
    
    }else{
      let shades = document.getElementById("alcool");
      shades.classList.remove('active')
      console.log(shades.classList);

      let shades2 = document.getElementById(value);
      shades2.classList.add('active')
      console.log(shades2.classList);

      const source = timer(500);
      source.subscribe(val => {
        let fond = document.getElementById("out");
        fond.classList.remove('active')

        let fond2 = document.getElementById("in");
        fond2.classList.add('active')
       
}
  );
    }

  }

}
