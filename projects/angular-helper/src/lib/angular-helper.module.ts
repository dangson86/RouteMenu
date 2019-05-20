import { NgModule } from '@angular/core';
import { RouteMenuComponent } from './route-menu/route-menu.component';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RouteMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [RouteMenuComponent]
})
export class AngularHelperModule { }
