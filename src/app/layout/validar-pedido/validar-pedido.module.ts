import  { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidarPedidoRoutingModule } from './validar-pedido-routing.module';
import { ValidarPedidoComponent } from './validar-pedido.component';

@NgModule({
  imports: [
    CommonModule,
    ValidarPedidoRoutingModule
  ],
  declarations: [
    ValidarPedidoComponent
  ]
})

export class ValidarPedidoModule {}
