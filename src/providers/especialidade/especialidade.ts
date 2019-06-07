import { Injectable } from '@angular/core';
import { Especialidade } from '../../model/especialidade';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class EspecialidadeProvider {

  private baseApiPath = '/api' + '/rest/especialidade';
  public especialidade: Especialidade;
  
  constructor(public http: Http) {
    console.log('Hello EspecialidadeProvider Provider');
  }
  
  listaEspecialidades() {
    return this.http.get(this.baseApiPath);
  }
}
