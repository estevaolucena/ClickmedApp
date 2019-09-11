import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = CadastroPage;
  tabLogin = LoginPage;

  constructor(private navController: NavController) {

  }
  goToHome(){
    this.navController.push(HomePage);
  }
}

