import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { TestComponent } from './modules/general/test/test.component';
import { DebugComponent } from './modules/general/debug/debug.component';
import { DashboardComponent } from './modules/general/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'home', component: HomeComponent, },
  { path: 'test', component: TestComponent, },
  { path: 'debug', component: DebugComponent, },
  { path: 'dashboard', component: DashboardComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
