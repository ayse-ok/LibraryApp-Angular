import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './template/profile/profile.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { DetayliAramaComponent } from './ziyaretci/detayli-arama/detayli-arama.component';
import { HesabimComponent } from './ziyaretci/hesabim/hesabim.component';
import { IadeEtmeComponent } from './ziyaretci-islemler/iade-etme/iade-etme.component';
import { OduncAlmaComponent } from './ziyaretci-islemler/odunc-alma/odunc-alma.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    NavbarComponent,
    DetayliAramaComponent,
    HesabimComponent,
    IadeEtmeComponent,
    OduncAlmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
