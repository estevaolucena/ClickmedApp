import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuscaProvider } from '../../providers/busca/busca';
import { Medico } from '../../model/medico';
import { ResultadoBuscaPage } from '../resultado-busca/resultado-busca';
import { ToastProvider } from '../../providers/toast/toast';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  stringBusca: string;
  public medicos : Medico [];
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private buscaProvider: BuscaProvider,
    private toastProvider: ToastProvider) {
  }
    
  buscaMedicos(){
    if(this.stringBusca == null){
      this.toastProvider.exibirToast('Pesquise pelo nome, especialidade ou localização :)');
      return
    }

    this.buscaProvider.busca(this.stringBusca).subscribe(
      data => {
        const response = (data as any);
        if (response._body) {  
          const medicos = JSON.parse(response._body);        
          this.medicos = medicos;          
          this.navCtrl.push(ResultadoBuscaPage, medicos);
          this.stringBusca ='';
        } else {
          this.toastProvider.exibirToast('Não há resultados para esta pesquisa');
        }
        
      }, error => {
        console.log(error);
      }
    )
  }
}
      