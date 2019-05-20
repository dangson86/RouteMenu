import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RouteInfo } from '../models/all.model';

@Component({
  selector: 'lib-route-menu',
  templateUrl: './route-menu.component.html',
  styleUrls: ['./route-menu.component.css']
})
export class RouteMenuComponent implements OnInit {

  @Input() includeOutlet = true;
  constructor(private route: ActivatedRoute) { }

  childrenRoutes: RouteInfo[] = [];
  ngOnInit() {
    if (this.route.routeConfig) {
      this.childrenRoutes = this.route.routeConfig.children;
    }
  }
}
