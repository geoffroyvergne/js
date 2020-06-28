import { Routes, RouterModule } from '@angular/router';
/*import {HomeRoutes} from './home/home.routing';
import {DebugRoutes} from './debug/debug.routing';
import {UserRoutes} from './user/user.routing';
import {TestRoutes} from './test/test.routing';
import {SsoRoutes} from './sso/sso.routing';
import {ProfilComponent} from './profil/profil.component';
import {ProfilRoutes} from './profil/profil.routing';*/

const appRoutes: Routes = [
  /*...HomeRoutes,
  ...TestRoutes,
  ...DebugRoutes,
  ...UserRoutes,
  ...SsoRoutes,
  ...ProfilRoutes*/
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
