import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteInfo } from './modules/my-module/components/route-menu/RouteInfo.model';
import { RouteMenuComponent } from './modules/my-module/components/route-menu/route-menu.component';

const routes: RouteInfo[] = [
  {
    path: 'main',
    component: RouteMenuComponent,
    children: [
      {
        path: 'Eng',
        displayName: 'Engineer',
        iconName: 'music_video',
        component: RouteMenuComponent,
        children: [
          {
            path: 'Fac',
            displayName: 'Facility',
            iconName: 'note',
            component: RouteMenuComponent,
            children: [
              {
                path: 'model3d',
                displayName: '3D model',
                iconName: 'explicit',
                component: RouteMenuComponent,
              },
              {
                path: 'setting',
                displayName: 'settings',
                iconName: 'settings',
                component: RouteMenuComponent,
              }
            ]
          }, {
            path: 'Pipe',
            displayName: 'Pipe line',
            iconName: 'equalizer',
            component: RouteMenuComponent,
          }
        ]
      },
      {
        path: 'Survey',
        displayName: 'Survey and Land',
        iconName: 'pause',
        component: RouteMenuComponent,
      }
    ]
  },
  {
    path: `**`,
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
