import { ToastProvider } from './../../providers/toast/toast';
import { AuthProvider } from './../../providers/auth/auth';
import { CadastroPage } from './../cadastro/cadastro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[
    AuthProvider
  ]
})
export class LoginPage {

  public usuario ={
    email: '',
    senha: '',
  }
  public userToken: String = '';
  public mensagem: String = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toastProvider: ToastProvider, 
    private authProvider: AuthProvider) {
  }

  onLogin(){
  
    if (this.usuario.email == '' || this.usuario.senha == ''){
      this.mensagem = "Usuário e/ou senha incorretos";
      this.toastProvider.exibirToast(this.mensagem);
      return;
    }

    this.authProvider.userAuth(this.usuario);
    this.userToken = this.authProvider.getToken;
    
    if (this.userToken) {
      this.mensagem = 'Bem vindo';
      this.toastProvider.exibirToast(this.mensagem);
      this.navCtrl.push(HomePage);
    } else {
      this.mensagem = 'Login e/ou senha incorretos';
      this.toastProvider.exibirToast(this.mensagem);
      return;
    }
    
  }

  goToRegister(){
    this.navCtrl.push(CadastroPage);
  }
}
