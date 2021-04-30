import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../model/User";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  getUserUrl: string = 'http://localhost:8080/getUser';
  addUserUrl: string = 'http://localhost:8080/addUser';
  removeAllUserUrl: string = 'http://localhost:8080/removeAllUser';
  removeUserUrl: string = 'http://localhost:8080/removeUser';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getUserUrl);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.addUserUrl, user, httpOptions);
  }

  removeAllUser() {
    return this.http.get(this.removeAllUserUrl);
  }

  removeUser(user: User): Observable<User> {
    return this.http.post<User>(this.removeUserUrl, user, httpOptions);
  }

}
