import {Component, OnInit} from '@angular/core';
import {AppService} from '../../shared/service/app.service';
import {RegisterUserModel} from '../../shared/model/register-user.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userData: RegisterUserModel = new RegisterUserModel();

  constructor(private appService: AppService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.userData = this.route.snapshot.data['userData'];
    // this.appService.getLoggedUserFullInfo().subscribe(user => this.userData = user);
  }
}
