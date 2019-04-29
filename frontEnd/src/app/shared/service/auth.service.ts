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

  success: boolean = false;

  constructor(private http: HttpClient,
              private appService: AppService) {
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
      this.success = true;
      return loggedUser;
    }));
  }

  public logout() {
    return this.http.post('/api/logout', {}).pipe((data) => {
      this.appService.logout();
      this.success = false;
      return data;
    }).subscribe();
  }

}
