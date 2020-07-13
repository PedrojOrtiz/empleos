import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearEmpleoPageRoutingModule } from './crear-empleo-routing.module';

import { CrearEmpleoPage } from './crear-empleo.page';
import { CamaraComponent } from 'src/app/componentes/camara/camara.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearEmpleoPageRoutingModule
  ],
  declarations: [CrearEmpleoPage],
  exports: [CamaraComponent]
})
export class CrearEmpleoPageModule {}
