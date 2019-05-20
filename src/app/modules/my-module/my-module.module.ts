import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteMenuComponent } from './components/route-menu/route-menu.component';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [RouteMenuComponent],
  exports: [
    RouteMenuComponent
  ]
})
export class MyModuleModule { }
