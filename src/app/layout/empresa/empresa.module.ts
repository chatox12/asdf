import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaComponent } from './empresa.component';

@NgModule({
  imports: [
    CommonModule,
    EmpresaRoutingModule
  ],
  declarations:[
    EmpresaComponent
  ]
})

export class EmpresaModule {}
