import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';


import {WebcamModule} from 'ngx-webcam';

import {CreateAccountComponent} from './create-account.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateAccountRoutingModule} from './create-account-routing.module';


@NgModule({
  imports: [
    CommonModule,
    WebcamModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    CreateAccountRoutingModule
  ],
  declarations: [CreateAccountComponent]
})
export class CreateAccountModule {
}
