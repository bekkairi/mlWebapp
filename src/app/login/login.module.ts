import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';


import {WebcamModule} from 'ngx-webcam';


import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    WebcamModule,
    LoginRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
