import { Component } from '@angular/core';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'FavorisPage';
  tab2Root = 'DrinksPage';
  tab3Root = 'GroupsPage';

  constructor() {}

  ionViewWillLoad(){
    
  }
}
