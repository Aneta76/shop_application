import {Component, OnInit} from '@angular/core';
import {LoginUserModel} from '../shared/model/login-user-model.model';
import {AuthService} from '../shared/service/auth.service';
import {AppService} from '../shared/service/app.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../app.component.css']
})
export class LoginComponent implements OnInit {
  userData: LoginUserModel = new LoginUserModel();

  constructor(private authService: AuthService,
              private location: Location,
              private appService: AppService,
              private router: Router) {
  }

  ngOnInit() {
    this.appService.getLoggedUserStream().subscribe(() => {
      // if (this.appService.isLoggedIn()) {
      // this.router.navigate(['/home']); // issue is here
      // }
    });
  }

  logIn() {
    this.authService.login(this.userData).subscribe((data) => {
      if (this.appService.getRole() === 'ADMIN') {
        this.router.navigate(['/admin-panel']);
      } else {
      this.router.navigate(['/user-panel']);
    }
    });
  }

  isLoggedIn(): boolean {
    return this.appService.isLoggedIn();
  }

  back() {
    this.location.back();
  }
}
