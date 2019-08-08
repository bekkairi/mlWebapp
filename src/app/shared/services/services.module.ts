import {NgModule} from '@angular/core';

import {HttpWSService} from './http-ws.service';
import {MessageService} from './message.service';

@NgModule({
  providers: [HttpWSService, MessageService],
})
export class ServiceModule {
}
