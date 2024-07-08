import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Request } from './request';

@NgModule({
  providers: [
    Request
  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
