import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Request } from './request';
import { MoshiMoshi } from '../MoshiMoshi';

@NgModule({
  providers: [
    Request,
    MoshiMoshi
  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
