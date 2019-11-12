import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AvaliacaoProvider {

  constructor(public http: Http) {
  }

  inserirAvaliacao(avaliacao){
    let endpoint = "/api" + "/api/avaliacao";
    let header = new Headers();
    let options = new RequestOptions({headers: header});

    header.append('Content-Type', 'application/json');
    
    this.http.post(endpoint, avaliacao, options)
      .subscribe(res => {
      if (res.status == 200) {
        return avaliacao
      }      
    }, (err) => {
      console.error(err);
      return;
    })
  }

  getMedia(idMedico): Observable<any> {
    var endpoint = "/api" + "/api/avaliacao/media/" + idMedico + "/";
    let header = new Headers();
    let options = new RequestOptions({headers: header});

    header.append('Content-Type', 'application/json');

    return this.http.get(endpoint, options)
        .map(res => {
          let media = res.json()
          return media
        }, (error) => {
          console.error(error)
          return
        })
  }

  getAvaliacoesAprovadas(idMedico): Observable<any> {
    var endpoint = "/api" + "/api/avaliacao/aprovada/" + idMedico + "/";
    let header = new Headers();
    let options = new RequestOptions({headers: header});

    header.append('Content-Type', 'application/json');

    return this.http.get(endpoint, options)
        .map(res => {
          return res.json()
        }, (error) => {
          console.error(error)
          return
        })
  }
}
