import { Route } from '@angular/router';

export interface RouteInfo extends Route {
    displayName?: string;
    iconName?: string;
    children?: RouteInfo[];
}

