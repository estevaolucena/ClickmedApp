import { Injectable } from '@angular/core';
import { Convenio } from '../../model/convenio';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ConvenioProvider {

  private baseApiPath = '/api' + '/rest/convenio';
  public convenio: Convenio;
  
  constructor(public http: Http) {
  }
  
  listaConvenios() {
    return this.http.get(this.baseApiPath);
  }
}
