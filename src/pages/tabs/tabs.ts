import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  public logged: boolean = false;
  tabHome = HomePage;
  tabLogin = LoginPage;

  constructor(
    private navController: NavController,
    private authProvider: AuthProvider) {

  }

  ionViewDidLoad() {
  } 
  
  ionViewCanEnter(){
    this.userLogged()
  }

  goToHome(){
    this.navController.push(HomePage)
  }

  userLogged(){
    if(this.authProvider.getToken != ''){
      return true
    }
  }
}

