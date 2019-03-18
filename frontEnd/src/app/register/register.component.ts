import {Component, OnInit} from '@angular/core';
import {RegisterUserModel} from '../shared/model/register-user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../app.component.css']
})
export class RegisterComponent implements OnInit {
  regUserData: RegisterUserModel = new RegisterUserModel();

  constructor() {
  }

  ngOnInit() {
  }

}
