import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SessionService} from "./SessionService";
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
export class FriendService {

  addFriendServiceUrl: string = 'http://http://35.239.210.35:8080/addFriend';
  getFriendsUrl: string = 'http://http://35.239.210.35:8080/getFriends';
  constructor(private http: HttpClient) {
  }

  addFriend(friendId:string): Observable<any> {
    console.log(this.addFriendServiceUrl + "?userId=" + SessionService.getCurrentUser().userId + "&friendId=" + friendId);
    return this.http.post<any>(this.addFriendServiceUrl + "?userId=" + SessionService.getCurrentUser().userId + "&friendId=" + friendId, httpOptions);
  }

  async getFriends(): Promise<User[]> {
    return await this.http.post<User[]>(this.getFriendsUrl + "?userId=" + SessionService.getCurrentUser().userId, httpOptions).toPromise();
  }
}
