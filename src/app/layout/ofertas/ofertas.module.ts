import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertasRoutingModule } from './ofertas-routing.module';
import { OfertasComponent } from './ofertas.component';

@NgModule({
  imports: [
    CommonModule,
    OfertasRoutingModule
  ],
  declarations: [
    OfertasComponent
  ]
})

export class OfertasModule {}
