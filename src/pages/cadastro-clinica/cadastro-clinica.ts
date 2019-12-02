import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { ClinicaProvider } from '../../providers/clinica/clinica';
import { LoginPage } from '../login/login';

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
    private clinicaProvider: ClinicaProvider,
    private alertCtrl: AlertController) {
  }
  
  inserirClinica(){
    console.log(this.clinica);
    if (this.clinicaProvider.insereClinica(this.clinica) == true) {
      let alert = this.alertCtrl.create({
        title: 'Sucesso',
        message: 'Sua clínica foi cadastrada com sucesso!',
        buttons: [
          {
            text: 'Entendi',
            role: 'entendi',
            handler: () => {
              this.navCtrl.push(LoginPage);
            }
          }
        ]
      });
      alert.present();
      
    } else {
      let alert = this.alertCtrl.create({
        title: 'Ops',
        subTitle: 'Parece que ocorreu um erro, tente novamente.',
        buttons: ['Entendi']
      });
      alert.present();
    }
  }  
}
