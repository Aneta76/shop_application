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
  showErrorMessage: boolean;

  constructor(private authService: AuthService,
              private location: Location,
              private appService: AppService,
              private router: Router) {
  }

  ngOnInit() {
    this.appService.getLoggedUserStream().subscribe(() => {
    });
  }

  logIn() {
    this.showErrorMessage = false;
    if ((this.userData.email !== null) && (this.userData.password !== null)) {
      this.authService.login(this.userData).subscribe((data) => {
          if (this.appService.getRole() === 'ADMIN') {
            this.router.navigate(['/admin-panel']);
          } else {
            this.router.navigate(['/user-panel']);
          }
        }, (error) => {
          this.showErrorMessage = true;
        }
      );
    }
  }

  isLoggedIn(): boolean {
    return this.appService.isLoggedIn();
  }
}
