import { AuthProvider } from './../../providers/auth/auth';
import { CadastroPage } from './../cadastro/cadastro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

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
    private toastCtrl: ToastController, 
    private authProvider: AuthProvider) {
  }

  onLogin(){
  
    if (this.usuario.email == '' || this.usuario.senha == ''){
      this.mensagem = "Usuário e/ou senha incorretos";
      this.exibirToast(this.mensagem);
      return;
    }

    this.authProvider.userAuth(this.usuario);
    this.userToken = this.authProvider.getToken;
    console.log('Authorization retornada do provider: ' + this.userToken)
    
    if (this.userToken != '') {
      this.mensagem = 'Usuário logado';
      this.exibirToast(this.mensagem);
      this.navCtrl.popToRoot();
    } else {
      this.mensagem = 'Login e/ou senha incorretos';
      this.exibirToast(this.mensagem);
      return;
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
