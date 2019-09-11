import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ClickmedApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { CadastroPacientePage } from '../pages/cadastro-paciente/cadastro-paciente';
import { CadastroMedicoPage } from '../pages/cadastro-medico/cadastro-medico';
import { CadastroClinicaPage } from '../pages/cadastro-clinica/cadastro-clinica';
import { VisualizaMedicoPage } from '../pages/visualiza-medico/visualiza-medico';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MedicoProvider } from '../providers/medico/medico';
import { PacienteProvider } from '../providers/paciente/paciente';
import { ClinicaProvider } from '../providers/clinica/clinica';
import { BuscaProvider } from '../providers/busca/busca';
import { ResultadoBuscaPage } from '../pages/resultado-busca/resultado-busca';
import { EspecialidadeProvider } from '../providers/especialidade/especialidade';
import { ConvenioProvider } from '../providers/convenio/convenio';
import { AuthProvider } from '../providers/auth/auth';
import { ToastProvider } from '../providers/toast/toast';

@NgModule({
  declarations: [
    ClickmedApp,
    CadastroPage,
    HomePage,
    TabsPage,
    IntroPage,
    CadastroPacientePage,
    CadastroMedicoPage,
    CadastroClinicaPage,
    VisualizaMedicoPage,
    ResultadoBuscaPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ClickmedApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ClickmedApp,
    CadastroPage,
    HomePage,
    TabsPage,
    IntroPage,
    CadastroPacientePage,
    CadastroMedicoPage,
    CadastroClinicaPage,
    VisualizaMedicoPage,
    ResultadoBuscaPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MedicoProvider,
    PacienteProvider,
    ClinicaProvider,
    BuscaProvider,
    EspecialidadeProvider,
    ClinicaProvider,
    ConvenioProvider,
    ConvenioProvider,
    AuthProvider,
    ToastProvider
  ]
})
export class AppModule {}
