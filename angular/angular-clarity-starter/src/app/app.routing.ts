import { Routes, RouterModule } from '@angular/router';
import {HomeRoutes} from './home/home.routing';
import {DebugRoutes} from './debug/debug.routing';
import {UserRoutes} from './user/user.routing';
import {TestRoutes} from './test/test.routing';

const appRoutes: Routes = [
  ...HomeRoutes,
  ...TestRoutes,
  ...DebugRoutes,
  ...UserRoutes,
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
