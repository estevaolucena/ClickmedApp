import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuscaProvider } from '../../providers/busca/busca';
import { Medico } from '../../model/medico';
import { ResultadoBuscaPage } from '../resultado-busca/resultado-busca';
import { ToastProvider } from '../../providers/toast/toast';
import { LoginPage } from '../../pages/login/login' 
import { CadastroPage } from '../cadastro/cadastro';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertController } from 'ionic-angular';


export interface PagesInterface {
  title: String,
  pageName: any,
  icon: String
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  stringBusca: string;
  public medicos : Medico [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private buscaProvider: BuscaProvider,
    private toastProvider: ToastProvider,
    private authProvider: AuthProvider,
    private alertCtrl: AlertController) {
  }

  pages: PagesInterface[]
  
  ionViewDidLoad(){
    this.menuItens()
  }
  
  menuItens(){
    if (this.userLogged() == true) {
      this.pages = [
        // {title: 'Meus dados', pageName: 'MeusDadosPage', icon: 'log-out'},
        {title: 'Sair', pageName: 'Logout', icon: 'log-out'}
      ] 
    } else {
      this.pages = [
        {title: 'Login', pageName: LoginPage, icon: 'log-in'},
        {title: 'Cadastre-se', pageName: CadastroPage, icon: 'person-add'},
      ]      
    }
  }

  openPage(page){
    if(page.title == 'Sair'){
      this.logout()
      return
    }
    let pageName = page.pageName
    this.navCtrl.push(pageName)
  }
  
  logout(){
    let alert = this.alertCtrl.create({
      title: 'Confirmação',
      message: 'Deseja realmente sair?',
      buttons: [
        {
          text: 'Não',
          handler: () => { 
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.authProvider.logout()
            this.navCtrl.setRoot(HomePage)
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
          }
        },
      ]
    })
    alert.present();    
  }
  
  userLogged(){
    if(this.authProvider.getToken != null){
      return true
    }
  }

  buscaMedicos(){
    if(this.stringBusca == null || this.stringBusca == ''){
      this.toastProvider.exibirToast('Pesquise pelo nome, especialidade ou localização :)');
      return
    }

    this.buscaProvider.busca(this.stringBusca).subscribe(
      data => {
        const response = (data as any);
        if (response._body) {  
          const medicos = JSON.parse(response._body);        
          this.medicos = medicos;          
          this.navCtrl.push(ResultadoBuscaPage, medicos);
          this.stringBusca ='';
        } else {
          this.toastProvider.exibirToast('Tente pesquisar pelo nome do profissional, especialidade ou localização :)');
        }
        
      }, error => {
        console.log(error);
      }
    )
  }
}
      