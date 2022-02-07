import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { KutuphaneComponent } from './app/kutuphane/kutuphane.component';
import { ZiyaretciComponent } from './app/ziyaretci/ziyaretci.component';
import { ZiyaretciIslemlerComponent } from './app/ziyaretci-islemler/ziyaretci-islemler.component';
import { ProfileComponent } from './app/profile/profile.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { ToolbarComponent } from './app/template/toolbar/toolbar.component';
import { FooterComponent } from './app/template/footer/footer.component';
import { ContainerComponent } from './app/template/container/container.component';
import { LoginComponent } from './app/auth/login/login.component';
import { LogoutComponent } from './app/auth/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KutuphaneComponent,
    ZiyaretciComponent,
    ZiyaretciIslemlerComponent,
    ProfileComponent,
    NavbarComponent,
    ToolbarComponent,
    FooterComponent,
    ContainerComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
