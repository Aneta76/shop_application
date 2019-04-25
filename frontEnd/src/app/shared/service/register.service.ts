import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RegisterUserModel} from '../model/register-user.model';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
    constructor(private http: HttpClient) {
  }

  public addUserToDataBase(registerUser: RegisterUserModel) {
    const headers = new HttpHeaders({
      ACCEPT: 'application/json',
      'Content-Type': 'application/json'
    });
    const options = {
      headers,
      withCredentials: true
    };
    return this.http.post('/api/users/reg', registerUser, options);
  }


}
