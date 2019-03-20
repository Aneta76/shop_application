import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {RegisterUserModel} from '../model/register-user.model';
import {HttpClient} from '@angular/common/http';
import {startWith} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  private loggedUser: RegisterUserModel = null;
  private loggedUserStream: Subject<RegisterUserModel> = new Subject();

  constructor(private hhtp: HttpClient) {
  }

  public setLoggedUser(loggedUser: RegisterUserModel) {
    this.loggedUser = loggedUser;
    this.loggedUserStream.next(this.loggedUser);
  }

  public getUser(): RegisterUserModel {
    return this.loggedUser;
  }

  public getLoggedUserStream(): Observable<RegisterUserModel> {
    return this.loggedUserStream.asObservable().pipe(startWith(this.loggedUser));
  }


}
