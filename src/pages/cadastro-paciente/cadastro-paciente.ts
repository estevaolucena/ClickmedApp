import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PacienteProvider } from '../../providers/paciente/paciente';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-cadastro-paciente',
  templateUrl: 'cadastro-paciente.html',
  providers:[
    PacienteProvider
  ]
})
export class CadastroPacientePage {
  public paciente = {
    id: '',
    nome: '',
    sobrenome: '',
    email: '',
    cpf: '',
    sexo:'',
    dataNascimento: '',
    telefone1: '',
    telefone2: '',
    cidade: '',
    estado: '',
    nomeRua: '',
    numero: '',
    bairro: '',
    cep: '',
    foto: '',
    usuario: {
      id: '',
      email: '',
      senha: '',
      permissao:
				[{
				id: 2,
				descricao: "paciente",
				permissao: 2
			}]
    }    
  }
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private pacienteProvider: PacienteProvider,
    private alertCtrl: AlertController)  {
  }

  inserirPaciente(){
    if (this.pacienteProvider.inserePaciente(this.paciente) == true) {
      let alert = this.alertCtrl.create({
        title: 'Sucesso',
        message: 'Seu cadastro foi realizado com sucesso. Agora é só fazer login :)',
        buttons: [
          {
            text: 'Entendi',
            role: 'entendi',
            handler: () => {
              this.navCtrl.push(LoginPage);
            }
          }
        ]
      });
      alert.present();
    } else {
      let alert = this.alertCtrl.create({
        title: 'Ops',
        subTitle: 'Parece que ocorreu um erro, tente novamente.',
        buttons: ['Entendi']
      });
      alert.present();
    }
  }

}
