import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoadingBarService} from '../common/service/loading.bar.service';
import {NotificationService} from '../common/service/notification.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from './auth.service';
import {User} from '../user/user.modele';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Input() public isModal = false;
  public cssClass = 'col-sm-6';

  public isLoading = false;
  public user: User = new User();

  constructor(public activeModal: NgbActiveModal, private authService: AuthService,
              public notificationService: NotificationService, private loadingBarService: LoadingBarService, public router: Router) {

  }

  ngOnInit() {
    if (this.isModal) {
      this.cssClass = 'col-sm-12';
    }
  }

  public onSubmit(loginForm: any) {
    this.isLoading = true;
    this.loadingBarService.start();
    this.authService.login(loginForm).then(auth => {
      this.isLoading = false;
      this.loadingBarService.complete();
      this.authService.addAuthStorage(auth);
      this.notificationService.success('Successfully logged in', 'Login');
      this.router.navigate(['/']);
    }).catch(error => {
      this.isLoading = false;
      this.loadingBarService.stop();
    });

    if (this.isModal) {
      this.activeModal.close(true);
    }
  }

}
