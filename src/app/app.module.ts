
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TranslateModule } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import {APP_BASE_HREF} from '@angular/common';
import { SharedModule } from 'primeng/api';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DynamicDialogModule,
    SharedModule,

    AuthModule,
    MainModule,
    TranslateModule.forRoot(), 
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/library'},
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
