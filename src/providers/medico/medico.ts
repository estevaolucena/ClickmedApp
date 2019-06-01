import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class MedicoProvider {
  
  private baseApiPath = '/api' + '/api/medico'; 
  
  constructor(public http: Http) {
    console.log('Hello MedicoProvider Provider');
  }
  
  getMedicos() {
    return this.http.get(this.baseApiPath);
  }
  
}
