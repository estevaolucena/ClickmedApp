import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Medico } from '../../model/medico';


/**
 * Generated class for the VisualizaMedicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualiza-medico',
  templateUrl: 'visualiza-medico.html',
})
export class VisualizaMedicoPage {

  public medico: Medico;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.medico = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualizaMedicoPage');
  }

}
