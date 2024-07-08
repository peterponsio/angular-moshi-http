import { NgModule } from '@angular/core';
import { AngularMoshiHttpComponent } from './angular-moshi-http.component';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { Request } from './http/request';
import { BrowserModule } from '@angular/platform-browser';
import { MoshiMoshiModule } from './moshi.module';
import { MoshiMoshi } from './MoshiMoshi';

@NgModule({
  declarations: [
    AngularMoshiHttpComponent
  ],
  imports: [
    BrowserModule,
    InterceptorsModule,
    MoshiMoshiModule
  ],
  exports: [
    AngularMoshiHttpComponent,
  ],
  providers: [
    //{ provide: AuthenticatorImpl, useFactory: AuthenticatorImpl} 
  ]
})
export class AngularMoshiHttpModule { }
