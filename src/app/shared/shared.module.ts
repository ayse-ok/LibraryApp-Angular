import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';

import { AmountConverterPipe } from './custom-pipes/amount-converter.pipe';
import { TitleCaseTrPipe } from './custom-pipes/titlecase-tr.pipe';
import { LoadingComponent } from './loading/loading.component';
import {PrimengComponentsModule} from './primeng-components/primeng-components.module';


@NgModule({
  declarations: [
     AmountConverterPipe,
     TitleCaseTrPipe,
     AlertComponent,
     LoadingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengComponentsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengComponentsModule,
    AmountConverterPipe,
    TitleCaseTrPipe,
    AlertComponent,
    LoadingComponent,
  ]
})
export class SharedModule {}
