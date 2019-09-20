import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Medico } from '../../model/medico';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from 'ionic-angular';
declare var google;


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
export class VisualizaMedicoPage{

  public medico: Medico;
  map: any;
  mapa;

  constructor(public navCtrl: NavController, public navParams: NavParams , private geolocation: Geolocation, private platform: Platform) {
    this.medico = this.navParams.data;
    this.mapa = this.getMapa();
    console.log( 'o medico: ' , this.medico )
  }
 
  ionViewDidLoad() {
  this.platform.ready().then(() => {
    const position = new google.maps.LatLng(  return this.medico['clinicas'][0].rua + ', ' + this.medico['clinicas'][0].numero + ' - ' + this.medico['clinicas'][0].cidade + ', ' + this.medico['clinicas'][0].estado;);
 
    const mapOptions = {
      zoom: 18,
      center: position,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
 
    const marker = new google.maps.Marker({
      position: position,
      map: this.map
    });
/*
    this.geolocation.getCurrentPosition()
      .then((resp) => {
        const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
 
        const mapOptions = {
          zoom: 18,
          center: position
        }
 
        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
 
        const marker = new google.maps.Marker({
          position: position,
          map: this.map
        });
 */
       this.getMapa();  
      }).catch((error) => {
        console.log('Erro ao recuperar sua posição', error);
      });
    }
      
    
   
  private getEndereco() {
    //console.log('endereco: ' , this.medico['clinicas'][0].rua + ', ' + this.medico['clinicas'][0].numero + ' - ' + this.medico['clinicas'][0].cidade + ', ' + this.medico['clinicas'][0].estado)
   return this.medico['clinicas'][0].rua + ', ' + this.medico['clinicas'][0].numero + ' - ' + this.medico['clinicas'][0].cidade + ', ' + this.medico['clinicas'][0].estado; 
   // return this.logradouro + ', ' + this.numero + ' - ' + this.bairro + ', ' + this.cidade + ' - ' + this.estado;
  }
 
  private getMapa() {
    return 'https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x400&markers=color:red|' + this.getEndereco() + '&key=AIzaSyCUuDGTji9puew4j7512PByi8HpKUXpe6s'
  }

}
