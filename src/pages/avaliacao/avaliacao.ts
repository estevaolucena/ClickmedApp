import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AvaliacaoProvider } from '../../providers/avaliacao/avaliacao';
import { Medico } from '../../model/medico';
import { AuthProvider } from '../../providers/auth/auth';
import { Paciente } from '../../model/paciente';
import { Avaliacao } from '../../model/avaliacao';

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

  dateLimit: String = new Date().toISOString();

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
    public authProvider: AuthProvider,
    private alertCtrl: AlertController) {
      this.medico = this.navParams.data; 
  }

  ionViewDidLoad(){
    this.loadTags()
  }

  inserirAvaliacao(avaliacao){
    let alert = this.alertCtrl.create({
      title: 'Confirmação',
      message: 'Deseja realmente salvar esta avaliação?',
      buttons: [
        {
          text: 'Não',
          handler: () => { 
          }
        },
        {
          text: 'Sim',
          handler: () => {
            let jsonObject = this.getUser()
            let usuarioLogado = JSON.parse(jsonObject)
            this.avaliacao.paciente.id = usuarioLogado.id
            this.avaliacao.medico.id = this.medico.id
            this.avaliacao.respostamed = "0"
            this.avaliacao.avaliacao = avaliacao.avaliacao.map(x=>x.name).join(", ")
            this.avaliacaoProvider.inserirAvaliacao(avaliacao)
            .subscribe(res => {
              if (res.status == 200) {
                let alert = this.alertCtrl.create({
                  title: 'Avaliação em aprovação',
                  subTitle: 'A data deste atendimento será confirmada pelo médico(a) antes de ficar visível no app :)',
                  buttons: ['Entendi']
                });
                alert.present();
                this.navCtrl.pop()
              } else {
                let alert = this.alertCtrl.create({
                  title: 'Ops, ocorreu um problema',
                  subTitle: 'Nossos incríveis engenheiros já foram acionados, tente novamente mais tarde :)',
                  buttons: ['Entendi']
                });
                alert.present();
                this.navCtrl.pop()
              }
            })            
            }
          },
        ]
      })
      alert.present();
  }

  loadTags(){
    return this.tags;
  }

  getUser(){
    let usuario = this.authProvider.getUser
    return usuario
  }

  logRatingChange(rating){     
    this.avaliacao.pergunta1 = rating;
  }
}
