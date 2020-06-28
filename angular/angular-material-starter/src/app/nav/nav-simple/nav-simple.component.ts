import { Component, OnInit } from '@angular/core';
import {Link, NavService} from '../nav.service';
import {TranslateService} from 'ng2-translate';
import {MdDialog} from '@angular/material';
import {AuthService} from '../../auth/auth.service';
import {AuthComponent} from '../../auth/auth.component';

@Component({
  selector: 'app-nav-simple',
  templateUrl: './nav-simple.component.html',
  styleUrls: ['./nav-simple.component.css']
})
export class NavSimpleComponent implements OnInit {

  private links: Link[];

  constructor(public translateService: TranslateService, public navService: NavService,
              public dialog: MdDialog, private authService: AuthService) {
    this.links = navService.getNav().links;
  }

  ngOnInit() {
  }

  loginModal() {
    const dialogRef = this.dialog.open(AuthComponent);
    dialogRef.componentInstance.isModal = true;
    dialogRef.componentInstance.dialogRef = dialogRef;

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  logout() {
    this.authService.logout();
  }

}
