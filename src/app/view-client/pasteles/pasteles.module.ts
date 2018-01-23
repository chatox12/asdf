import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PastelesRoutingModule } from './pasteles-routing.module';
import { PastelesComponent } from './pasteles.component';

@NgModule({
  imports: [
    CommonModule,
    PastelesRoutingModule
  ],
  declarations: [PastelesComponent]

})

export class PastelesModule {}
