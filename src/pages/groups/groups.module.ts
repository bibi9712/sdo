import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupsPage } from './groups';
import { GroupPage } from './group/group';

@NgModule({
  declarations: [
    GroupsPage,
    GroupPage
  ],
  imports: [
    IonicPageModule.forChild(GroupsPage),
  ],
  entryComponents:[
    GroupsPage,
    GroupPage
  ]
})
export class GroupsPageModule {}
