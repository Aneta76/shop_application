import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/service/auth.service';
import {RegisterUserModel} from '../../shared/model/register-user.model';
import {AppService} from '../../shared/service/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./../../app.component.css']
})
export class NavbarComponent implements OnInit {

  private loggedUser: RegisterUserModel = null;

  constructor(private authService: AuthService,
              private appService: AppService) {
  }

  ngOnInit() {
  }

  checkOnline(): boolean {
    if (!this.authService.success) {
      return;
    }
    this.loggedUser = this.appService.getUser();
    return true;
  }
}
