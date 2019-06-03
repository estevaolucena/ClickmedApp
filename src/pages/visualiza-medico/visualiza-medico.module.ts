import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisualizaMedicoPage } from './visualiza-medico';

@NgModule({
  declarations: [
    VisualizaMedicoPage,
  ],
  imports: [
    IonicPageModule.forChild(VisualizaMedicoPage),
  ],
})
export class VisualizaMedicoPageModule {}
