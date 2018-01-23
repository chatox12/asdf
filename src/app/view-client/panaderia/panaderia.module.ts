import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanaderiaRoutingModule } from './panaderia-routing.module';
import { PanaderiaComponent } from './panaderia.component';

@NgModule({
  imports: [
    CommonModule,
    PanaderiaRoutingModule
  ],
  declarations: [PanaderiaComponent]
})

export class PanaderiaModule {}
