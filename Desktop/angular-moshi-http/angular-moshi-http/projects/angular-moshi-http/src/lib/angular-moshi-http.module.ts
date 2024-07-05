import { NgModule } from '@angular/core';
import { AngularMoshiHttpComponent } from './angular-moshi-http.component';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { AuthenticatorImpl } from './authenticator/AuthenticatorImpl';
import { Request } from './http/request';



@NgModule({
  declarations: [
    AngularMoshiHttpComponent
  ],
  imports: [
    InterceptorsModule
  ],
  exports: [
    AngularMoshiHttpComponent
  ],
  providers: [
    Request,
    //{ provide: AuthenticatorImpl, useFactory: AuthenticatorImpl} 
  ]
})
export class AngularMoshiHttpModule { }
