import { Usuario } from './../../model/usuario';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvider {

  
  private baseApiPath = "/api" + "/api/login";
  public usuario: Usuario;
  public authorization: any;

  constructor(public http: Http) {
  }

  async userAuth(usuario) {
    
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: header});
    
    await this.http.post(this.baseApiPath, usuario, options)
    .subscribe(res => {
      this.authorization = res.headers.get('authorization');
      if(this.authorization != ''){
        console.log("Auth no provider " + this.authorization);
        this.storeToken(this.authorization, );
        return true;
      }
    }, (err) => {
      console.log(err);
      return false;
    })
  }

  public logout() {
    this.clearToken();
  }

  public get getToken() {
    return localStorage.getItem("token");
  }

  public storeToken(token: string) {
      localStorage.setItem("token", token);
  }

  clearToken(): any {
    localStorage.removeItem("token");
  }
}

