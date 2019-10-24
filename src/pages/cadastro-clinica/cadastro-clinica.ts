import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ClinicaProvider } from '../../providers/clinica/clinica';
import { ToastProvider } from '../../providers/toast/toast';
import { HomePage } from '../home/home';

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
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private toastProvider:	ToastProvider, 
    private clinicaProvider: ClinicaProvider) {
  }
  
  inserirClinica(){
    console.log(this.clinica);
    if (this.clinicaProvider.insereClinica(this.clinica) == true) {
      this.toastProvider.exibirToast("Cadastro realizado com sucesso");
      this.navCtrl.push(HomePage);
    } else {
      this.toastProvider.exibirToast("Ocorreu um erro.");
    }
  }  
}
