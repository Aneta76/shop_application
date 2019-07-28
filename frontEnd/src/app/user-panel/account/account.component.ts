import {Component, OnInit} from '@angular/core';
import {AppService} from '../../shared/service/app.service';
import {RegisterUserModel} from '../../shared/model/register-user.model';
import {UserService} from '../../shared/service/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./../../app.component.css']
})
export class AccountComponent implements OnInit {

  userData: RegisterUserModel = new RegisterUserModel();
  id: number;

  constructor(private appService: AppService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.id = this.appService.getUser().id;
    this.userService.getUser(this.id).subscribe(data => this.userData = data);
  }

  checkIfAdmin(): boolean {
    return this.appService.ifAdmin();
  }
}
