import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tab } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToTabsPage (){
    this.navCtrl.setRoot(TabsPage);
  }
}
