import {Component, OnInit} from '@angular/core';
import {RegisterUserModel} from '../../shared/model/register-user.model';
import {UserService} from '../../shared/service/user.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./../../app.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: Array<RegisterUserModel> = [];
  user: RegisterUserModel;

  constructor(private userService: UserService,
              private location: Location,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.users = data['users'];
    });
  }

  public removeUser(id: number, index: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.users.splice(index, 1);
    });
  }

  back() {
    this.location.back();
  }
}
