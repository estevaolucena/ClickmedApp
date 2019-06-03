import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../../model/paciente';
import 'rxjs/add/operator/map';


@Injectable()
export class PacienteProvider {
  
  private baseApiPath = '/api' + '/api/paciente'; 
  public paciente:Paciente;
  
  constructor(public http: Http) {
    console.log('Hello PacienteProvider Provider');
  }
  
  listaPacientes() {
    return this.http.get(this.baseApiPath);
  }
  
  inserePaciente(paciente) {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: header});
    this.http.post(this.baseApiPath, paciente, options)
    .map(res => {res.json()})
    .subscribe(data => console.log(data))
    
  }  
}
