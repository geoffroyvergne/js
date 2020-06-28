import { Routes } from '@angular/router';
import {AuthComponent} from './auth.component';

export const AuthRoutes: Routes = [
    { path: 'auth',  component: AuthComponent },
    { path: 'login',  component: AuthComponent }
];
