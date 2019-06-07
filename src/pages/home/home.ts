import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { BuscaProvider } from '../../providers/busca/busca';
import { Medico } from '../../model/medico';
import { ResultadoBuscaPage } from '../resultado-busca/resultado-busca';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  stringBusca: string;
  public medicos : Medico [];
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private toastCtrl:	ToastController, 
    private buscaProvider: BuscaProvider) {
    }
    
  buscaMedicos(){
    this.buscaProvider.busca(this.stringBusca).subscribe(
      data => {
        const response = (data as any);
        const medicos = JSON.parse(response._body);
        this.medicos = medicos;
        console.log(medicos);
        this.navCtrl.push(ResultadoBuscaPage, medicos);
        this.stringBusca ='';
      }, error => {
        console.log(error);
      }
    )
  }  
}
      