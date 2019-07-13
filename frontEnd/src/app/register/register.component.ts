import {Component, OnInit, ViewChild} from '@angular/core';
import {RegisterUserModel} from '../shared/model/register-user.model';
import {UserService} from '../shared/service/user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../app.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') f: NgForm | undefined;
  regUserData: RegisterUserModel = new RegisterUserModel();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  registerUser() {
    if (this.f.valid) {
      this.userService.saveUserData(this.regUserData).subscribe(
        data => {
          console.log('user added');
        },
        error1 => {
          alert('ERROR: Email address is already taken!');        }
      );
    }
  }
}
