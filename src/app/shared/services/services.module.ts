import {NgModule} from '@angular/core';

import {HttpWSService} from './http-ws.service';
import {MessageService} from './message.service';
import {SpinnerServiceService} from './spinner-service.service';
import {HttpSpinnerInterceptorService} from './http-spinner-interceptor.service';

@NgModule({
  providers: [HttpWSService, MessageService, HttpSpinnerInterceptorService, SpinnerServiceService],
})
export class ServiceModule {
}
