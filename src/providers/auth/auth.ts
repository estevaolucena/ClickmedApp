import { Usuario } from './../../model/usuario';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvider {

  
  private baseApiPath = '/api' + '/api/auth';
  public usuario: Usuario;

  constructor(public http: Http) {
  }

  userAuth(usuario) {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: header});
    this.http.post(this.baseApiPath, usuario, options)
    .subscribe(res => {
      return true;
    }, (err) => {
      alert(err);
      return false;
    })
    return null;
  }
}

