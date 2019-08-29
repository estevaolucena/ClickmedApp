import { AuthProvider } from './../../providers/auth/auth';
import { CadastroPage } from './../cadastro/cadastro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public usuario ={
    email: '',
    senha: ''
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private toastCtrl:	ToastController, 
              private authProvider: AuthProvider) {
  }

  login(){
    if (this.authProvider.userAuth(this.usuario) == true) {
      alert("Usuario logado");
    } else {
      this.exibirToast("Login e/ou senha incorretos");
    }
  }

  goToRegister(){
    this.navCtrl.push(CadastroPage);
  }

  exibirToast(dados) {
    let t = this.toastCtrl.create({
      message: dados,
      duration: 3000,
      position: "top"
    });
    t.present();
  }

}
