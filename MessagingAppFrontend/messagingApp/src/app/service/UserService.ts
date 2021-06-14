import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../model/User";
import {DBSwitchService} from "./DBSwitchService";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'

  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // MySQL Endpoints
  getUsersUrl: string = process.env.BACKEND_URL + '/getUsers';
  getUserUrl: string = process.env.BACKEND_URL + '/getUser';
  addUserUrl: string = process.env.BACKEND_URL + '/addUser';
  removeAllUserUrl: string = process.env.BACKEND_URL + '/removeAllUser';
  removeUserUrl: string = process.env.BACKEND_URL + '/removeUser';
  getViaNameUrl: string = process.env.BACKEND_URL + '/getViaName';


  // MongoDB Endpoints
  addUserMongoUrl: string = process.env.BACKEND_URL + '/mongo/addUser';


  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.getUsersUrl);
  }

  async getUser(user: User): Promise<User> {
    return await this.http.post<User>(this.getUserUrl, user, httpOptions).toPromise();
  }

  addUser(user: User): Observable<User> {
    if(DBSwitchService.isMongoDB){
      return this.http.post<User>(this.addUserMongoUrl, user, httpOptions);
    } else {
      return this.http.post<User>(this.addUserUrl, user, httpOptions);
    }
  }

  removeAllUser() {
    return this.http.get(this.removeAllUserUrl);
  }

  removeUser(user: User): Observable<User> {
    return this.http.post<User>(this.removeUserUrl, user, httpOptions);
  }

  async getViaName(userName:string): Promise<User> {
    return await this.http.post<User>(this.getViaNameUrl,userName, httpOptions).toPromise();
  }

}
