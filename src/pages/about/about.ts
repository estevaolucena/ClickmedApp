import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Medico } from '../../model/medico';
import { MedicoProvider } from '../../providers/medico/medico';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers:[
    MedicoProvider
  ]
})
export class AboutPage {
  
  public medicos : Medico [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private medicoProvider: MedicoProvider) {
  }
  
  ionViewDidLoad() {
    this.medicoProvider.getMedicos().subscribe(
      data => {
        const response = (data as any);
        const medicos = JSON.parse(response._body);
        this.medicos = medicos;
        console.log(medicos);
      }, error => {
        console.log(error);
      }
      )
    }    
  }
  