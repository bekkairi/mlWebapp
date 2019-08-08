import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {NavComponent} from './nav/nav.component';
import {ComponentModule} from '../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    TranslateModule,
    ComponentModule
  ],
  exports: [
    MatIconModule, MatButtonModule
  ],
  declarations: [LayoutComponent, NavComponent]
})
export class LayoutModule {
}
