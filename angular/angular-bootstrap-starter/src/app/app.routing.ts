import { Routes, RouterModule } from '@angular/router';
import {HomeRoutes} from './home/home.routing';
import {TestRoutes} from './test/test.routing';
import {DebugRoutes} from './debug/debug.routing';
import {AuthRoutes} from './auth/auth.routing';
import {UserComponent} from './user/user.component';
import {UserRoutes} from './user/user.routing';
import {RegisterComponent} from './register/register.component';
import {RegisterRoutes} from './register/register.routing';
import {SearchRoutes} from './search/search.routing';
import {ProfilRoutes} from './profil/profil.routing';

const appRoutes: Routes = [
  ...HomeRoutes,
  ...TestRoutes,
  ...DebugRoutes,
  ...AuthRoutes,
  ...UserRoutes,
  ...RegisterRoutes,
  ...SearchRoutes,
  ...ProfilRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
