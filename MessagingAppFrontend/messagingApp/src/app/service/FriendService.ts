import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SessionService} from "./SessionService";

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

  addFriendServiceUrl: string = 'http://localhost:8080/addFriend';

  constructor(private http: HttpClient) {
  }

  addFriend(friendId:string): Observable<any> {
    return this.http.post<any>(this.addFriendServiceUrl + "?userId=" + SessionService.getCurrentUser().userId + "&friendId=" + friendId, httpOptions);
  }
}
