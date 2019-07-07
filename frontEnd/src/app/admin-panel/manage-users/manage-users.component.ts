import {Component, OnInit} from '@angular/core';
import {RegisterUserModel} from '../../shared/model/register-user.model';
import {UserService} from '../../shared/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./../../app.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: Array<RegisterUserModel> = [];
  user: RegisterUserModel;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => this.users = data);
  }

  public removeUser(id: number, index: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.users.splice(index, 1);
    });
  }
}
