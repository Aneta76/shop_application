import {Component, OnInit} from '@angular/core';
import {RegisterUserModel} from '../shared/model/register-user.model';
import {RegisterService} from '../shared/service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../app.component.css']
})
export class RegisterComponent implements OnInit {
  regUserData: RegisterUserModel = new RegisterUserModel();

  constructor(private regService: RegisterService) {
  }

  ngOnInit() {
  }

  registerUser() {
    this.regService.addUserToDataBase(this.regUserData).subscribe(
      data => console.log('user added')
    );
  }
}
