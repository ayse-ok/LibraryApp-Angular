
import { CommonModule } from '@angular/common';

import { KutuphaneRoutingModule } from './kutuphane-routing.module';
import { KitapComponent } from './kitap/kitap.component';
import { KategoriComponent } from './kategori/kategori.component';
import { EnvanterComponent } from './envanter/envanter.component';
import { DashboardComponent } from '../main/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    KitapComponent,
    KategoriComponent,
    EnvanterComponent,
   // DashboardComponent    
  ],
  imports: [
    CommonModule,
    KutuphaneRoutingModule,
    SharedModule
  ]
})
export class KutuphaneModule { }
