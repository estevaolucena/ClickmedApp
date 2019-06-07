import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Medico } from '../../model/medico';
import { MedicoProvider } from '../../providers/medico/medico';

/**
 * Generated class for the CadastroMedicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-medico',
  templateUrl: 'cadastro-medico.html',
})
export class CadastroMedicoPage {
  public medico: Medico;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl:	ToastController) {
    this.medico = new Medico();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroMedicoPage');
  }

  inserirMedico(){
    console.log(this.medico);
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
