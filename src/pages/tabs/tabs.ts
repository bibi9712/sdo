import { Component } from '@angular/core';
import {DrinksPage} from '../drinks/drinks';
import {FavorisPage} from '../favoris/favoris'
import {GroupsPage} from '../groups/groups';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FavorisPage;
  tab2Root = DrinksPage;
  tab3Root = GroupsPage;

  constructor() {}

  ionViewWillLoad(){
    
  }
}
