import {Injectable} from '@angular/core';
import {LoginUserModel} from '../model/login-user-model.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AppService} from './app.service';
import {Observable} from 'rxjs/internal/Observable';
import {RegisterUserModel} from '../model/register-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public success = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private http: HttpClient,
              private appService: AppService) {
  }


  public setSuccess(value: boolean) {
    this.success = value;
    localStorage.setItem('loggedIn', 'true');
  }

  public getSuccess() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.success.toString());
  }


  public login(userData: LoginUserModel): Observable<RegisterUserModel> {

    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const options = {
      headers,
      withCredentials: true
    };

    const body = `username=${userData.email}&password=${userData.password}`;

    return this.http.post('/api/login', body, options).pipe(map((loggedUser: RegisterUserModel) => {
      this.appService.setLoggedUser(loggedUser);
      this.setSuccess(true);
      localStorage.setItem('currentUser', JSON.stringify(loggedUser));
      return loggedUser;
    }));
  }

  public logout() {
    return this.http.post('/api/logout', {}).pipe((data) => {
      this.appService.logout();
      this.setSuccess(false);
      localStorage.removeItem('currentUser');
      localStorage.removeItem('loggedIn');
      return data;
    }).subscribe();
  }
}
