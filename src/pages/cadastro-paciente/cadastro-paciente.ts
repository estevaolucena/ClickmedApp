import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PacienteProvider } from '../../providers/paciente/paciente';
import { HomePage } from '../home/home';
import { ToastProvider } from '../../providers/toast/toast';

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
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private pacienteProvider: PacienteProvider,
              private toastProvider: ToastProvider) {
  }

  inserirPaciente(){
    if (this.pacienteProvider.inserePaciente(this.paciente) == true) {
      this.toastProvider.exibirToast("Cadastro realizado com sucesso");
      this.navCtrl.push(HomePage);
    } else {
      this.toastProvider.exibirToast("Ocorreu um erro.");
    }
  }

}
