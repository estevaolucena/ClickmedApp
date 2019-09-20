import { Usuario } from './../../model/usuario';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvider {
  
  public usuario: Usuario;
  public authorization: any;

  constructor(public http: Http) {
  }

  async userAuth(usuario) {
    let endpoint = "/api" + "/api/login";
    let header = new Headers();
    let options = new RequestOptions({headers: header});

    header.append('Content-Type', 'application/json');
    
    await this.http.post(endpoint, usuario, options)
      .subscribe(res => {
      this.authorization = res.headers.get('authorization');
      if(this.authorization){
        this.storeToken(this.authorization);
        this.getUserInfo(usuario.email);
        return true;
      }
    }, (err) => {
      console.error(err);
      return false;
    })
  }

  async getUserInfo(email) {
    var endpoint = "/api" + "/api/auth/usuario/" + email + "/";
    let header = new Headers();
    let options = new RequestOptions({headers: header});

    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.getToken);
    
    await this.http.get(endpoint, options)
        .subscribe(res => {
          if (res.status == 200) {
            let usuario = JSON.stringify(res.json())
            this.storeUser(usuario);
          }
        })
  }

  public logout() {
    this.clearLocalStorage();
  }

  public get getToken() {
    return localStorage.getItem("token");
  }

  public get getUser() {
    return localStorage.getItem("usuario");
  }

  private storeToken(token: string) {
    localStorage.setItem("token", token);
  }

  private storeUser(usuario: string){
    localStorage.setItem("usuario", usuario)
  }

  clearLocalStorage(): any {
    localStorage.clear();
  }
}

