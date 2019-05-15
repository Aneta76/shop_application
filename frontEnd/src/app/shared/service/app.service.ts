import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {RegisterUserModel} from '../model/register-user.model';
import {HttpClient} from '@angular/common/http';
import {map, startWith} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  private loggedUser: RegisterUserModel = null;
  private loggedUserStream: Subject<RegisterUserModel> = new Subject();

  constructor(private http: HttpClient) {
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

  public getLoggedUserInfo(): Observable<RegisterUserModel> {
    return this.http.get('/api/logged-user-info').pipe(map((loggedUser: RegisterUserModel) => {
      this.loggedUser = loggedUser;
      this.loggedUserStream.next(this.loggedUser);
      return this.loggedUser;
    }));
  }

  public getRole() {
    const roles = this.loggedUser.roles;
    //  console.log('roles: ', roles);
    let rolee: string;
    let role: string;
    for (role of roles) {
      // console.log('rolee: ', rolee);
      rolee = role;
    }
    return rolee;
  }

  public getLoggedUserFullInfo(): Observable<RegisterUserModel> {
    return this.http.get('/api/logged-user-full-info').pipe(map((loggedUser: RegisterUserModel) => {
      this.loggedUser = loggedUser;
      this.loggedUserStream.next(this.loggedUser);
      return this.loggedUser;
    }));
  }


  public isLoggedIn(): boolean {
    return !!this.loggedUser;
  }

  public logout(): RegisterUserModel {
    this.loggedUser = null;
    this.loggedUserStream.next(this.loggedUser);
    return this.loggedUser;
  }

}
