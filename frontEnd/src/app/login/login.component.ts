import {Component, OnInit} from '@angular/core';
import {LoginUserModel} from '../shared/model/login-user-model.model';
import {AuthService} from '../shared/service/auth.service';
import {AppService} from '../shared/service/app.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../app.component.css']
})
export class LoginComponent implements OnInit {
  userData: LoginUserModel = new LoginUserModel();

  constructor(private authService: AuthService,
              private location: Location,
              private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getLoggedUserStream().subscribe(() => {
      if (this.appService.isLoggedIn()) {
        this.location.back();
      }
    });
  }

  logIn() {
    this.authService.login(this.userData).subscribe((data) => this.back());
  }

  back() {
    this.location.back();
  }
}
