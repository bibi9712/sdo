import { Component} from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


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
      this.navCtrl.push('ConnexionPage');
    }
    
}
