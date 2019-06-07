import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BuscaProvider {
  
  private baseApiPath = '/api' + '/api/busca/';
  stringBusca: string;
  
  constructor(public http: Http) {
    console.log('Hello BuscaProvider Provider');
  }
  
  busca(stringBusca) {
    try {
      return this.http.get(this.baseApiPath + stringBusca);
    } catch (error) {
      return error;
    }
    
  }  
}
