import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterUserModel} from '../model/register-user.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private users: Array<RegisterUserModel> = [];

  constructor(private http: HttpClient) {
  }

  public saveUserData(registerUser: RegisterUserModel): Observable<RegisterUserModel> {
    if (registerUser.id) {
      registerUser.roles = null;
      return this.http.put('/api/users/update', registerUser).pipe(map((response: RegisterUserModel) => {
        return response;
      }));
    } else {
      return this.http.post('/api/users/new', registerUser).pipe(map((response: RegisterUserModel) => {
        return response;
      }));
    }
  }

  public getAllUsers(): Observable<Array<RegisterUserModel>> {
    return this.http.get('/api/users/all').pipe(map((response: Array<RegisterUserModel>) => {
      this.users = response;
      return this.users;
    }));
  }

  public getUser(id: number): Observable<RegisterUserModel> {
    return this.http.get('/api/users/all/' + id).pipe(map((response: RegisterUserModel) => {
      return response;
    }));
  }

  public deleteUser(id: number) {
    return this.http.delete('api/users/delete/' + id);
  }
}
