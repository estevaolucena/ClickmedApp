import { Injectable } from '@angular/core';
import { Convenio } from '../../model/convenio';
import { Http } from '@angular/http';

@Injectable()
export class ConvenioProvider {

  private baseApiPath = '/api' + '/api/convenio';
  public convenio: Convenio;
  
  constructor(public http: Http) {
  }
  
  listaConvenios() {
    return this.http.get(this.baseApiPath);
  }
}
