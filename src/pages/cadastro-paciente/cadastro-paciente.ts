import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PacienteProvider } from '../../providers/paciente/paciente';

@IonicPage()
@Component({
  selector: 'page-cadastro-paciente',
  templateUrl: 'cadastro-paciente.html',
})
export class CadastroPacientePage {
  public paciente = {
    id: '',
    nome: '',
    sobrenome: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    telefone1: '',
    telefone2: '',
    cidade: '',
    estado: '',
    nomeRua: '',
    numero: '',
    bairro: '',
    cep: '',
    foto: '',
    usuario: {
      id: '',
      email: '',
      senha: '',
      permissao: ''
    }
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl:	ToastController, private pacienteProvider: PacienteProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPacientePage');
  }

  inserirPaciente(){
    console.log(this.paciente);
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
