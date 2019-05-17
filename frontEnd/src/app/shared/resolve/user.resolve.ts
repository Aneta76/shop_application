import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {AppService} from '../service/app.service';

@Injectable()
export class UserResolve implements Resolve<any> {

  constructor(private appService: AppService) {
  }

  resolve() {
    return this.appService.getUser();
  }
}
