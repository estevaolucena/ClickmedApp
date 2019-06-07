import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Medico } from '../../model/medico';


@Injectable()
export class MedicoProvider {
  
  private baseApiPath = '/api' + '/api/medico';
  public medico: Medico;
  
  constructor(public http: Http) {
    console.log('Hello MedicoProvider Provider');
  }
  
  listaMedicos() {
    return this.http.get(this.baseApiPath);
  }

  insereMedico(medico) {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: header});
    this.http.post(this.baseApiPath, medico, options)
    .subscribe(res => {
      console.log(res);
    }, (err) => {
      console.log(err);
    })
    return true;
  }
}
