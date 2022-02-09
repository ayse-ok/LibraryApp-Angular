import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AmountConverterPipe } from './custom-pipes/amount-converter.pipe';
import { TitleCaseTrPipe } from './custom-pipes/titlecase-tr.pipe';
import {PrimengComponentsModule} from './primeng-components/primeng-components.module';


@NgModule({
  declarations: [
     AmountConverterPipe,
     TitleCaseTrPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengComponentsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengComponentsModule,
    AmountConverterPipe,
    TitleCaseTrPipe

  ]
})
export class SharedModule {}
