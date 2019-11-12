import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

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

}
