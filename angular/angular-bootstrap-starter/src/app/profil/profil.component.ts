import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'] ,
  providers: [AuthService]
})
export class ProfilComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  getProfil() {
    return this.authService.getAuthStorage();
  }

  editProfil() {
    console.log('editProfil');
  }

}
