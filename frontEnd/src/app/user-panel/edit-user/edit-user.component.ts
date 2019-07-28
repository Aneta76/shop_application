import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../shared/service/user.service';
import {RegisterUserModel} from '../../shared/model/register-user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AppService} from '../../shared/service/app.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./../../app.component.css']
})
export class EditUserComponent implements OnInit {
  @ViewChild('f') f: NgForm | undefined;
  userData: RegisterUserModel = new RegisterUserModel();
  id: number;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private appService: AppService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.userData = data['userData'];
    });
  }

  public updateUserData() {
    if (this.f.valid) {
      this.userService.saveUserData(this.userData).subscribe(data => {
        console.log('user updated');
        this.back();
      });
    }
  }

  back() {
    if (this.appService.getRole() === 'ADMIN') {
      if (this.router.url.endsWith('/edit')) {
        this.router.navigate(['/admin-panel/account']);
      } else {
        this.router.navigate(['/admin-panel/users']);
      }
    } else {
      this.router.navigate(['/user-panel']);
    }
  }
}
