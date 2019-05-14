import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RegisterUserModel} from '../model/register-user.model';
import {register} from 'ts-node';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) {
  }

  // public addUserToDataBase(registerUser: RegisterUserModel) {
  //   const headers = new HttpHeaders({
  //     ACCEPT: 'application/json',
  //     'Content-Type': 'application/json'
  //   });
  //   const options = {
  //     headers,
  //     withCredentials: true
  //   };
  //   return this.http.post('/api/users/reg', registerUser, options);
  // }

  public saveUserData(registerUser: RegisterUserModel): Observable<RegisterUserModel> {
    if (registerUser.id) {
      console.log('id ' + registerUser.id)
      registerUser.roles = null;
      // JSON.stringify(registerUser.roles);
      return this.http.put('/api/users/update', registerUser).pipe(map((response: RegisterUserModel) => {
        return response;
      }));
    } else {
      return this.http.post('/api/users/new', registerUser).pipe(map((response: RegisterUserModel) => {
        return response;
      }));
    }
  }
}
