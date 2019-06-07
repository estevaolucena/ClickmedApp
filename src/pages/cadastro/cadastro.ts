import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroPacientePage } from '../cadastro-paciente/cadastro-paciente';
import { CadastroMedicoPage } from '../cadastro-medico/cadastro-medico';
import { CadastroClinicaPage } from '../cadastro-clinica/cadastro-clinica';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  
  goToCadastroPacientePage (){
    this.navCtrl.push(CadastroPacientePage);
  }

  goToCadastroMedicoPage (){
    this.navCtrl.push(CadastroMedicoPage);
  }

  goToCadastroClinicaPage (){
    this.navCtrl.push(CadastroClinicaPage);
  }  
}
