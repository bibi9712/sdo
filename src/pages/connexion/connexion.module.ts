import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnexionPage } from './connexion';
//Service 
import{ConnexionService} from './connexion.service'

@NgModule({
  declarations: [
    ConnexionPage,
  ],
  imports: [
    IonicPageModule.forChild(ConnexionPage),
  ],
  providers: [
    ConnexionService
  ]
})
export class ConnexionPageModule {}
