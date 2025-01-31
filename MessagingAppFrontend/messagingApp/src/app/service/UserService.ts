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
  getUsersUrl: string = 'http://35.239.210.35:8080/getUsers';
  getUserUrl: string = 'http://35.239.210.35:8080/getUser';
  addUserUrl: string = 'http://35.239.210.35:8080/addUser';
  removeAllUserUrl: string = 'http://35.239.210.35:8080/removeAllUser';
  removeUserUrl: string = 'http://35.239.210.35:8080/removeUser';
  getViaNameUrl: string = 'http://35.239.210.35:8080/getViaName';


  // MongoDB Endpoints
  addUserMongoUrl: string = 'http://35.239.210.35:8080/mongo/addUser';


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
