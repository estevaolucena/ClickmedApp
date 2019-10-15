import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MedicoProvider } from '../../providers/medico/medico';
import { Especialidade } from '../../model/especialidade';
import { Clinica } from '../../model/clinica';
import { Convenio } from '../../model/convenio';
import { EspecialidadeProvider } from '../../providers/especialidade/especialidade';
import { ClinicaProvider } from '../../providers/clinica/clinica';
import { ConvenioProvider } from '../../providers/convenio/convenio';
import { ToastProvider } from '../../providers/toast/toast';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-cadastro-medico',
  templateUrl: 'cadastro-medico.html',
  providers:[
    MedicoProvider,
    EspecialidadeProvider
  ]
})
export class CadastroMedicoPage {
  public especialidades: Especialidade[];
  public clinicas: Clinica[];
  public convenios: Convenio[];
  public medico = {
    id: '',
    crm: '',
    nome: '',
    sobrenome: '',
    experienciaProfissional: '',
    formacaoAcademica: '',
    planosConvenio: '',
    telefone1: '',
    telefone2: '',
    horaInicioAtendimento: '',
    horaFimAtendimento: '',
    diasAtendimento: '',
    sexo: '',
    usuario: {
      id: '',
      email: '',
      senha: '',
      permissoes: {
        permissao: '1',
        descricao: 'medico',
      }
    },
    convenios: {
      id: '',
      codConvenio: '',
      nome: '',
    },
    clinicas: {
      id: '',
      nomeFantasia: '',
      razaoSocial: '',
      cnpj: '',
      email: '',
      site: '',
      telefone1: '',
      telefone2: '',
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
    },
    especialidades: {
      id: '',
      nome: '', 
      outros: '',
    }
  }
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private toastProvider:	ToastProvider,
    private especialidadeProvider: EspecialidadeProvider,
    private medicoProvider: MedicoProvider,
    private convenioProvider: ConvenioProvider,
    private clinicaProvider: ClinicaProvider) {
  }
    
  ionViewDidLoad() {
    this.listarEspecialidades();
    this.listarClinicas();
    this.listarConvenios();
  }   
    
  inserirMedico(){
    console.log(this.medico);
    if (this.medicoProvider.insereMedico(this.medico) == true) {
      this.toastProvider.exibirToast("Cadastro realizado com sucesso");
      this.navCtrl.push(HomePage);
    } else {
      this.toastProvider.exibirToast("Ocorreu um erro.");
    }
  }

  listarEspecialidades(){
    this.especialidadeProvider.listaEspecialidades().subscribe(
      data => {
        const response = (data as any);
        const especialidades = JSON.parse(response._body);
        this.especialidades = especialidades;
      }, error => {
        console.log(error);
      }
    )
  }

  listarConvenios(){
    this.convenioProvider.listaConvenios().subscribe(
      data => {
        const response = (data as any);
        const convenios = JSON.parse(response._body);
        this.convenios = convenios;
      }, error => {
        console.log(error);
      }
    )
  }

  listarClinicas(){
    this.clinicaProvider.listaClinicas().subscribe(
      data => {
        const response = (data as any);
        const clinicas = JSON.parse(response._body);
        this.clinicas = clinicas;
      }, error => {
        console.log(error);
      }
    )
  }
    
}
    