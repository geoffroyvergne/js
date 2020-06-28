import { Routes, RouterModule } from '@angular/router';
import {HomeRoutes} from './home/home.routing';
import {TestRoutes} from './test/test.routing';
import {AuthRoutes} from './auth/auth.routing';
import {Register} from 'ts-node/dist';
import {RegisterRoutes} from './register/register.routing';
import {DebugRoutes} from './debug/debug.routing';
import {UserRoutes} from './user/user.routing';

const appRoutes: Routes = [
  ...HomeRoutes,
  ...TestRoutes,
  ...AuthRoutes,
  ...RegisterRoutes,
  ...DebugRoutes,
  ...UserRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
