import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

const uiModules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatListModule
];
@NgModule({
  imports: uiModules,
  exports: uiModules
})
export class AppUiModule { }
