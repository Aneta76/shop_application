import {Component, OnInit} from '@angular/core';
import {LoginUserModel} from '../shared/model/login-user-model.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../app.component.css']
})
export class LoginComponent implements OnInit {
  userData: LoginUserModel = new LoginUserModel();

  constructor() {
  }

  ngOnInit() {
  }

  logIn() {

  }
}
