import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {AppService} from '../service/app.service';
import {UserService} from '../service/user.service';

@Injectable()
export class UserResolve implements Resolve<any> {

  constructor(private appService: AppService) {
  }

  resolve() {
    return this.appService.getUser();
  }
}

@Injectable()
export class UsersResolve implements Resolve<any> {

  constructor(private userService: UserService) {
  }

  resolve() {
    return this.userService.getAllUsers();
  }
}

@Injectable()
export class UserByIdResolve implements Resolve<any> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.userService.getUser(route.params['id']);
  }
}
