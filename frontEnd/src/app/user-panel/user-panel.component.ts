import {Component, OnInit} from '@angular/core';
import {RegisterUserModel} from '../shared/model/register-user.model';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  userData: RegisterUserModel = new RegisterUserModel();

  constructor() {
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('currentUser'));
  }

}
