import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KutuphaneRoutingModule } from './kutuphane-routing.module';
import { KitapComponent } from './kitap/kitap.component';


@NgModule({
  declarations: [
    KitapComponent
  ],
  imports: [
    CommonModule,
    KutuphaneRoutingModule
  ]
})
export class KutuphaneModule { }
