import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroPacientePage } from '../cadastro-paciente/cadastro-paciente';

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
  
}
