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
  public authorization: String;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl: ToastController, 
    private authProvider: AuthProvider) {
  }

  login(){
    if(this.usuario != null){
      this.authorization = this.authProvider.userAuth(this.usuario);
      console.log('Authorization retornada do provider: ' + this.authorization)
      if (this.authorization != '') {
        this.exibirToast('Usuário logado ' + this.usuario + 'Authorization ' + this.authorization);
      } else {
        this.exibirToast("Login e/ou senha incorretos");
      }
    }else{
      this.exibirToast('Preencha o login e senha.');
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
