import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../shared/service/user.service';
import {RegisterUserModel} from '../../shared/model/register-user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @ViewChild('f') f: NgForm | undefined;
  userData: RegisterUserModel = new RegisterUserModel();

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.userData = this.route.snapshot.data['userData'];
  }

  public updateUserData() {
    if (this.f.valid) {
      this.userService.saveUserData(this.userData).subscribe(data => console.log('user updated'));
    }
    this.router.navigate(['/admin-panel/users']);
  }

  back() {
    this.router.navigate(['/admin-panel/users']);
  }
}
