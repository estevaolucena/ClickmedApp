import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Medico } from '../../model/medico';
import { VisualizaMedicoPage } from '../visualiza-medico/visualiza-medico';

@IonicPage()
@Component({
  selector: 'page-resultado-busca',
  templateUrl: 'resultado-busca.html',
})
export class ResultadoBuscaPage {
  public medico: Medico;
  public medicos : Medico [];
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.medicos = this.navParams.data;
  }
  
  visualizaMedico(medico: Medico) {
    this.navCtrl.push(VisualizaMedicoPage, medico);
  }
}
