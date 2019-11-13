import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { ElementRef, ViewChild, NgZone } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AvaliacaoPage } from '../avaliacao/avaliacao';
import { Medico } from '../../model/medico';
import { AuthProvider } from '../../providers/auth/auth';
import { AvaliacaoProvider } from '../../providers/avaliacao/avaliacao';
import { Avaliacao } from '../../model/avaliacao';

declare var google;

@IonicPage()
@Component({
  selector: 'page-visualiza-medico',
  templateUrl: 'visualiza-medico.html',
})
export class VisualizaMedicoPage {

  medico: any
  map: any
  mapa: String
  permissao: any
  media: number
  avaliacoesAprovadas: Avaliacao[]
  tagArray: any

  markers: any = [];
  autocomplete: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems: any;

  coorResult = [];
  agencyList = [];
  addrsList = [];
  coordList = [];
  finalCoor = [];

  @ViewChild('map') mapElement: ElementRef;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams , 
    public viewCtrl: ViewController,
    public platform: Platform,
    public http: Http,
    public zone: NgZone,
    public modalCtrl: ModalController,
    public authProvider: AuthProvider,
    public avaliacaoProvider: AvaliacaoProvider){
      this.geocoder = new google.maps.Geocoder
      this.medico = this.navParams.data  
      this.getAllClinicas(this.medico)
    }
    
  ionViewDidLoad(){
    this.initMap()
    this.getUserProfile()
    this.getMedia()
    this.getAvaliacoesAprovadas()
  }

  getAvaliacoesAprovadas(){
    this.avaliacaoProvider.getAvaliacoesAprovadas(this.medico.id).subscribe((result) => {
      this.avaliacoesAprovadas = result

      for(var i = 0; i < this.avaliacoesAprovadas.length; i++){
        let temp = this.avaliacoesAprovadas[i].avaliacao
        this.tagArray = temp.split(',')
        this.avaliacoesAprovadas[i].avaliacao = this.tagArray;
      }      
      return this.avaliacoesAprovadas
    })
  }

  getMedia(){
    this.avaliacaoProvider.getMedia(this.medico.id).subscribe((result) => {
      this.media = result
      return this.media
    })
  }

  getUserProfile(){
    let jsonObject = this.authProvider.getUser
    if (jsonObject) {
      let usuarioLogado = JSON.parse(jsonObject)
      this.permissao = usuarioLogado.usuario.permissao.map(obj => obj.permissao)
      return this.permissao
    } else {
      return this.permissao = 0
    }
  }

  avaliarMedico(medico: Medico) {
    this.navCtrl.push(AvaliacaoPage, medico);
  }

  initMap(){
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      disableDefaultUI: true,
      zoomControl: true,
      scaleControl: true,
      fullscreenControl: true,
      streetViewControl: true,
    });
    setTimeout(() => {
    }, 400);
  }
  
  getAllClinicas(medico){
    for (var i = 0; i< medico['clinicas'].length; i++){
      this.httpConverte(medico['clinicas'][i].nomeFantasia, medico['clinicas'][i].rua + ', ' + medico['clinicas'][i].numero + ' - ' + medico['clinicas'][i].cidade + ', ' + medico['clinicas'][i].estado);
    }      
  }

  httpConverte(nomeFantasia, address){
    this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + ',+BR&key=AIzaSyAvVri_2o8xcZ4mcpjctJlFcR93-_nIzwI')
    .subscribe(res => {
      this.coorResult = res.json().results;
      // console.log('CoorResult', this.coorResult[0].geometry.location.lat, this.coorResult[0].geometry.location.lng);
      if (res.json().status === 'OK') {
        this.addMarker(nomeFantasia, this.coorResult);
      }else{
        console.log('Opss...RETURN');
        return;
      } 
    }, (err) => {
      console.log(err);
    });
  }

  addMarker(nomeFantasia, results) {
    let iconMed = 'assets/imgs/clickMarker.png';
    let marker = new google.maps.Marker({
      position: results[0].geometry.location,
      map: this.map,
      icon: iconMed,
      title: nomeFantasia
    });
    if(results[0] && results[0] != undefined){
      this.markers.push(marker);
      this.map.setCenter(results[0].geometry.location);
    }
    let content = `<h4 class='pinMedColor'>` + nomeFantasia +` </h4>`;
    this.addInfoWindow(marker, content);
    marker.addListener('click', () => { 
    });
  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  clearMarkers(){
    for (var i = 0; i < this.markers.length; i++) {
      console.log(this.markers[i])
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }

}
