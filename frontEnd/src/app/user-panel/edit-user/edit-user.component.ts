import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/service/user.service';
import {RegisterUserModel} from '../../shared/model/register-user.model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userData: RegisterUserModel = new RegisterUserModel();

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.userData = this.route.snapshot.data['userData'];
  }

  public updateUserData() {
    this.userService.saveUserData(this.userData).subscribe(data => console.log('user updated'));
  }

  back() {
    this.location.back();
  }
}
