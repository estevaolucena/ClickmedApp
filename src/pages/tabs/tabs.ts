import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  public logged: boolean = false;
  tabHome = HomePage;

  constructor(
    private navController: NavController) {
  }

  goToHome(){
    this.navController.popToRoot()
  }
}

