import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersGroupPage } from './users-group';

@NgModule({
  declarations: [
    UsersGroupPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersGroupPage),
  ],
})
export class UsersGroupPageModule {}
