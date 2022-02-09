
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { ZiyaretciIslemlerModule } from '../ziyaretci-islemler/ziyaretci-islemler.module';
import { ZiyaretciModule } from '../ziyaretci/ziyaretci.module';
import { KutuphaneModule } from '../kutuphane/kutuphane.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    MainComponent,
    ProfileComponent,
    NavbarComponent,
    ToolbarComponent,
    ContainerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MainRoutingModule,
    SharedModule,

    ZiyaretciIslemlerModule,
    ZiyaretciModule,
    KutuphaneModule
  ]
})
export class MainModule { }
