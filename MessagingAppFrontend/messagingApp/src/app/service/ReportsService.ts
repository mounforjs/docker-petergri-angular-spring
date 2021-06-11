import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FirstReportDTO} from "../model/FirstReportDTO";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  firstReportUrl: string = 'http://localhost:8080/firstReport';

  constructor(private http: HttpClient) {
  }

  firstReport(): Observable<FirstReportDTO[]> {
    return this.http.get<FirstReportDTO[]>(this.firstReportUrl, httpOptions);
  }
}
