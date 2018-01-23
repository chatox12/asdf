import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostresRoutingModule } from './postres-routing.module';
import { PostresComponent } from './postres.component';

@NgModule({
  imports: [
    CommonModule,
    PostresRoutingModule
  ],
  declarations:[
    PostresComponent
  ]
})

export class PostresModule {}
