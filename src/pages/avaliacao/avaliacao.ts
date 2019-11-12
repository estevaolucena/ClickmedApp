import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvaliacaoProvider } from '../../providers/avaliacao/avaliacao';
import { Medico } from '../../model/medico';
import { AuthProvider } from '../../providers/auth/auth';
import { Paciente } from '../../model/paciente';
import { Avaliacao } from '../../model/avaliacao';
import { VisualizaMedicoPage } from '../visualiza-medico/visualiza-medico';

@IonicPage()
@Component({
  selector: 'page-avaliacao',
  templateUrl: 'avaliacao.html',
})

export class AvaliacaoPage {
  
  avaliacao: Avaliacao = {
    medico: {},
    paciente: {},
  }

  medico: Medico = {}

  paciente: Paciente = {}

  tags = [
    {name: "Pontualidade"},
    {name: "Clareza nas informações"},
    {name: "Paciência"},
    {name: "Higiene"},
  ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public avaliacaoProvider: AvaliacaoProvider,
    public authProvider: AuthProvider) {
      this.medico = this.navParams.data; 
  }

  ionViewDidLoad(){
    this.loadTags()
  }

  inserirAvaliacao(avaliacao){
    let jsonObject = this.getUser()
    let usuarioLogado = JSON.parse(jsonObject)
    this.avaliacao.paciente.id = usuarioLogado.id
    this.avaliacao.medico.id = this.medico.id
    this.avaliacao.avaliacao = avaliacao.avaliacao.map(x=>x.name).join(", ")
    this.avaliacaoProvider.inserirAvaliacao(avaliacao)
    this.goToVisualizaMedico(this.medico)
  }

  loadTags(){
    return this.tags;
  }

  getUser(){
    let usuario = this.authProvider.getUser
    return usuario
  }

  goToVisualizaMedico(medico: Medico){
    this.navCtrl.pop()
  }

  logRatingChange(rating){     
    console.log("changed rating: ",rating);
    this.avaliacao.pergunta1 = rating;
  }
}
