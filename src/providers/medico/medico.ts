import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


/*
Generated class for the MedicoProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class MedicoProvider {
  
  private baseApiPath = 'http://localhost:8080/api/medico'; 
  
  constructor(public http: Http) {
    console.log('Hello MedicoProvider Provider');
  }
  
  getMedicos() {
    return this.http.get(this.baseApiPath);
  }
  
}
