import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { KutuphaneComponent } from './app/kutuphane/kutuphane.component';
import { ZiyaretciComponent } from './app/ziyaretci/ziyaretci.component';
import { ZiyaretciIslemlerComponent } from './app/ziyaretci-islemler/ziyaretci-islemler.component';
import { ProfileComponent } from './app/template/profile/profile.component';
import { NavbarComponent } from './app/template/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KutuphaneComponent,
    ZiyaretciComponent,
    ZiyaretciIslemlerComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
