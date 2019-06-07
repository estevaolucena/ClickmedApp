import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Clinica } from '../../model/clinica';

@Injectable()
export class ClinicaProvider {
  public clinica: Clinica;
  private baseApiPath = '/api' + '/api/clinica'; 

  constructor(public http: Http) {
    console.log('Hello ClinicaProvider Provider');
  }

  listaClinicas() {
    return this.http.get(this.baseApiPath);
  }
  
  insereClinica(clinica) {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: header});
    this.http.post(this.baseApiPath, clinica, options)
    .subscribe(res => {
      console.log(res);
    }, (err) => {
      console.log(err);
    })
    return true;
  }  

}
