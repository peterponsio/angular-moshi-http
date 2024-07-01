import { NgModule } from '@angular/core';
import { AngularMoshiHttpComponent } from './angular-moshi-http.component';
import { InterceptorsModule } from './interceptors/interceptors.module';



@NgModule({
  declarations: [
    AngularMoshiHttpComponent
  ],
  imports: [
    InterceptorsModule
  ],
  exports: [
    AngularMoshiHttpComponent
  ]
})
export class AngularMoshiHttpModule { }
