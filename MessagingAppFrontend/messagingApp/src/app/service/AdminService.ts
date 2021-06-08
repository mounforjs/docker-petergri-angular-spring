import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../model/User";
import {Admin} from "../model/Admin";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // getAdminsUrl: string = 'http://localhost:8080/getAdmins';
  getAdminUrl: string = 'http://localhost:8080/getAdmin';
  addAdminUrl: string = 'http://localhost:8080/addAdmin';
  getAdminForLoginUrl: string = 'http://localhost:8080/getAdminForLogin';
  // removeAllAdminUrl: string = 'http://localhost:8080/removeAllAdmin';
  // removeAdminUrl: string = 'http://localhost:8080/removeAdmin';

  constructor(private http: HttpClient) {
  }

  getAdmin(admin: Admin): Observable<User> {
    return this.http.post<Admin>(this.getAdminUrl, admin, httpOptions);
  }

  addAdmin(admin: Admin): Observable<User> {
    return this.http.post<Admin>(this.addAdminUrl, admin, httpOptions);
  }

  getAdminForLogin(user: User) {
    return this.http.post<User>(this.getAdminForLoginUrl, user, httpOptions);
  }
}
