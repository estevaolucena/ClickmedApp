import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { HomePage } from '../pages/home/home';
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

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CadastroPage,
    HomePage,
    TabsPage,
    IntroPage,
    CadastroPacientePage,
    CadastroMedicoPage,
    CadastroClinicaPage,
    VisualizaMedicoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CadastroPage,
    HomePage,
    TabsPage,
    IntroPage,
    CadastroPacientePage,
    CadastroMedicoPage,
    CadastroClinicaPage,
    VisualizaMedicoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MedicoProvider,
    PacienteProvider
  ]
})
export class AppModule {}
