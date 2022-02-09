import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZiyaretciIslemlerRoutingModule } from './ziyaretci-islemler-routing.module';
import { IadeEtmeComponent } from './iade-etme/iade-etme.component';
import { OduncAlmaComponent } from './odunc-alma/odunc-alma.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from '../main/dashboard/dashboard.component';


@NgModule({
  declarations: [
    IadeEtmeComponent,
    OduncAlmaComponent,
  //  DashboardComponent
  ],
  imports: [
    CommonModule,
    ZiyaretciIslemlerRoutingModule,
    SharedModule
  ]
})
export class ZiyaretciIslemlerModule { }
