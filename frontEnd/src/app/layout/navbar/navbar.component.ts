import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/service/auth.service';
import {RegisterUserModel} from '../../shared/model/register-user.model';
import {AppService} from '../../shared/service/app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./../../app.component.css']
})
export class NavbarComponent implements OnInit {

  private loggedUser: RegisterUserModel = null;

  constructor(private authService: AuthService,
              private appService: AppService,
              private router: Router) {
  }

  ngOnInit() {
  }

  checkIfAdmin(): boolean {
    if (this.appService.getRole() === 'ADMIN') {
      console.log('for true: ', this.appService.getRole());
     //  console.log('ADMIN TRUE');
      return true;
    } else {
      console.log('for false: ', this.appService.getRole());
      // console.log('ADMIN FALSE');
      return false;
    }
  }

  checkOnline(): boolean {
    if (!this.authService.success) {
      return false;
    }
    this.loggedUser = this.appService.getUser();
    return true;
  }

  logoutUser() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
