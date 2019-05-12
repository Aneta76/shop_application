import {Component, OnInit} from '@angular/core';
import {RegisterUserModel} from '../shared/model/register-user.model';
import {UserService} from '../shared/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../app.component.css']
})
export class RegisterComponent implements OnInit {
  regUserData: RegisterUserModel = new RegisterUserModel();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  registerUser() {
    this.userService.saveUserData(this.regUserData).subscribe(
      data => console.log('user added')
    );
  }
}
