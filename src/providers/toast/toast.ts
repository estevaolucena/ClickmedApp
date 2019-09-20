import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastProvider {

  constructor(
    public http: HttpClient,
    public toastCtrl: ToastController) {

  }

  public exibirToast(dados) {
      let t = this.toastCtrl.create({
        message: dados,
        duration: 3000,
        position: "top"
      });
      t.present();
  }
}
