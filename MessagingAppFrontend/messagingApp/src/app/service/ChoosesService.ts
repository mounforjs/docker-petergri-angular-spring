import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ChatDTO} from "../model/ChatDTO";
import {Hobby} from "../model/Hobby";
import {Admin} from "../model/Admin";
import {User} from "../model/User";
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
export class ChoosesService {

  addChoiceUrl: string = 'http://35.239.210.35:8080/addChoice';

  constructor(private http: HttpClient) {
  }


  addChoice(hobby: Hobby): Observable<Hobby> {
    // let data = {'hobbyId': hobby.hobbyId, 'userId': SessionService.getCurrentUser().userId};
    // const data = new FormData();
    // data.append('hobbyId', hobby.hobbyId);
    // data.append('userId', SessionService.getCurrentUser().userId);
    return this.http.post<Hobby>(this.addChoiceUrl + "?hobbyId="+ hobby.hobbyId + "&userId=" + SessionService.getCurrentUser().userId, httpOptions);
  }
}
