import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ClinicaProvider } from '../../providers/clinica/clinica';

@IonicPage()
@Component({
  selector: 'page-cadastro-clinica',
  templateUrl: 'cadastro-clinica.html',
})
export class CadastroClinicaPage {
  public clinica = {
    id: '',
    nomeFantasia: '',
    razaoSocial: '',
    cnpj: '',
    email: '',
    site: '',
    telefone1: '',
    telefone2: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: ''
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl:	ToastController, private clinicaProvider: ClinicaProvider) {
  }
  
  inserirClinica(){
    console.log(this.clinica);
    if (this.clinicaProvider.insereClinica(this.clinica) == true) {
      this.exibirToast ("Cadastro realizado com sucesso");
      this.navCtrl.popToRoot();
    } else {
      this.exibirToast ("Ocorreu um erro.");
    }
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
