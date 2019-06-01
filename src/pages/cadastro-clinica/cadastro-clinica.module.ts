import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroClinicaPage } from './cadastro-clinica';

@NgModule({
  declarations: [
    CadastroClinicaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroClinicaPage),
  ],
})
export class CadastroClinicaPageModule {}
