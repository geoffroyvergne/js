import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { HomeComponent } from './modules/general/home/home.component';
import { TestComponent } from './modules/general/test/test.component';
import { DashboardComponent } from './modules/general/dashboard/dashboard.component';
import { DashboardService } from './modules/general/dashboard/dashboard.service';
import { AuthService } from './services/auth.service';
import { DebugComponent } from './modules/general/debug/debug.component';
import { PostDialogComponent } from './modules/general/post-dialog/post-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    TestComponent,
    DebugComponent,
    DashboardComponent,
    PostDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule, LayoutModule, FormsModule, ReactiveFormsModule, FlexLayoutModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, 
    MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatCardModule, MatTableModule, MatDialogModule
  ],
  providers: [DashboardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
