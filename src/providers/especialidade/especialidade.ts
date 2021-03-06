import { Injectable } from '@angular/core';
import { Especialidade } from '../../model/especialidade';
import { Http} from '@angular/http';

@Injectable()
export class EspecialidadeProvider {

  private baseApiPath = '/api' + '/api/especialidade';
  public especialidade: Especialidade;
  
  constructor(public http: Http) {
  }
  
  listaEspecialidades() {
    return this.http.get(this.baseApiPath);
  }
}
