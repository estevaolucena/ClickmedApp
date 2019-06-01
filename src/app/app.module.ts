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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MedicoProvider } from '../providers/medico/medico';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CadastroPage,
    HomePage,
    TabsPage,
    IntroPage
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
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MedicoProvider
  ]
})
export class AppModule {}
