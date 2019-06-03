import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Paciente } from '../../model/paciente';
import { PacienteProvider } from '../../providers/paciente/paciente';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-cadastro-paciente',
  templateUrl: 'cadastro-paciente.html',
})
export class CadastroPacientePage {
  public paciente: Paciente;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl:	ToastController, private pacienteProvider: PacienteProvider) {
    this.paciente = new Paciente();
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
