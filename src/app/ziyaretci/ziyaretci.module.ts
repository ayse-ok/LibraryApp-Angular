import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZiyaretciRoutingModule } from './ziyaretci-routing.module';
import { DetayliAramaComponent } from './detayli-arama/detayli-arama.component';
import { HesabimComponent } from './hesabim/hesabim.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from '../main/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DetayliAramaComponent,
    HesabimComponent,
 //   DashboardComponent
  ],
  imports: [
    CommonModule,
    ZiyaretciRoutingModule,
    SharedModule
  ]
})
export class ZiyaretciModule { }
