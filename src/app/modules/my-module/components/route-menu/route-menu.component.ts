import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteInfo } from './RouteInfo.model';

@Component({
  selector: 'app-route-menu',
  templateUrl: './route-menu.component.html',
  styleUrls: ['./route-menu.component.scss']
})
export class RouteMenuComponent implements OnInit {

  @Input() includeOutlet = true;
  constructor(private router: Router, private route: ActivatedRoute) { }

  childrenRoutes: RouteInfo[] = [];
  ngOnInit() {
    if (this.route.routeConfig) {
      this.childrenRoutes = this.route.routeConfig.children;
    }
  }
}
