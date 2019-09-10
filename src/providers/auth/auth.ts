import { Usuario } from './../../model/usuario';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvider {

  
  private baseApiPath = "/api" + "/api/login";
  public usuario: Usuario;
  public authorization: String;

  constructor(public http: Http) {
  }

  userAuth(usuario) {
    
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: header});
    
    this.http.post(this.baseApiPath, usuario, options)
    .subscribe(res => {
      this.authorization = res.headers.get('authorization');
      if(this.authorization != null){
        console.log("Auth no provider " + this.authorization);
        return this.authorization;
      }
    }, (err) => {
      console.log(err);
      return this.authorization = "Error";
    })
    return this.authorization = "Retorno final";
  }
}

