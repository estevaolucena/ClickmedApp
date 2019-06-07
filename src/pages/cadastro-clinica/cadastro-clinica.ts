import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl:	ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroClinicaPage');
  }

  inserirClinica(){
    console.log(this.clinica);
    /* this.pacienteProvider.inserePaciente(this.paciente); */
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
