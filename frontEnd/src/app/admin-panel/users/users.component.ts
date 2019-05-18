import {Component, OnInit} from '@angular/core';
import {RegisterUserModel} from '../../shared/model/register-user.model';
import {UserService} from '../../shared/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<RegisterUserModel> = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => this.users = data);
  }

}
