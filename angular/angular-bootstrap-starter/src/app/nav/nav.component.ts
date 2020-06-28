import { Component, OnInit } from '@angular/core';
import {AuthComponent} from '../auth/auth.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../auth/auth.service';
import {NotificationService} from '../common/service/notification.service';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  ngOnInit() {
    this.translateService.use('en');
  }

  constructor(private translateService: TranslateService, private modalService: NgbModal,
              public authService: AuthService, public notificationService: NotificationService) {
  }

  public setLanguage(language: string): void {
    this.translateService.use(language);
  }

  loginModal() {
    const modalRef = this.modalService.open(AuthComponent);
    modalRef.componentInstance.isModal = true;
    modalRef.result.then((result) => { }, (reason) => { });
  }

  logout() {
    this.authService.logout();
    this.notificationService.success('Successfully logged out', 'Logout');
  }

}
