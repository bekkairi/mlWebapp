import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TopnavComponent} from './topnav/topnav.component';
import {MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    TranslateModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
     TopnavComponent
  ],
  declarations: [
     TopnavComponent
  ]
})
export class ComponentModule {
}
