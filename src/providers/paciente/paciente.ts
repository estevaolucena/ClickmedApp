import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../../model/paciente';


@Injectable()
export class PacienteProvider {
  
  private baseApiPath = '/api' + '/api/paciente'; 
  public paciente:Paciente;
  
  constructor(public http: Http) {
  }
  
  listaPacientes() {
    return this.http.get(this.baseApiPath);
  }
  
  inserePaciente(paciente) {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: header});

    console.log('Paciente no provider ', paciente )
    this.http.post(this.baseApiPath, paciente, options)
      .subscribe(res => {
        console.log(res.json());
      }, (error) => {
        console.error(error)
      })
      return true
  }  
}
