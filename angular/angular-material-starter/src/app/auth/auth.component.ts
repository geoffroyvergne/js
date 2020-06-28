import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {HttpService} from '../common/service/http.service';
import {User} from '../user/user.modele';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [ AuthService, HttpService ]
})
export class AuthComponent implements OnInit {
  @Input() public isModal = false;
  @Input() public dialogRef;

  public cssClass = 'col-sm-6';

  public isLoading = false;
  public user: User = new User();

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    if (this.isModal) {
      this.cssClass = 'col-sm-12';
    }
  }

  public onSubmit(loginForm: any) {
    this.isLoading = true;
    this.authService.login(loginForm).then(auth => {
      this.isLoading = false;
      this.authService.addAuthStorage(auth);
    }).catch(error => {
      this.isLoading = false;
    });

    if (this.isModal) {
      this.dialogRef.close(true);
    } else {
      this.router.navigate(['/home']);
    }
  }

  public closeDialog() {
    this.dialogRef.close(false);
  }
}
