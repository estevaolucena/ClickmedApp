import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPacientePage } from './cadastro-paciente';

@NgModule({
  declarations: [
    CadastroPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPacientePage),
  ],
})
export class CadastroPacientePageModule {}
