import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Hobby} from "../model/Hobby";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  getHobbiesUrl: string = 'http://localhost:8080/getHobbies';

  constructor(private http: HttpClient) {
  }

  getHobbies(): Observable<Hobby[]> {
    return this.http.get<Hobby[]>(this.getHobbiesUrl);
  }
}
