import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FirstReportDTO} from "../model/FirstReportDTO";
import {SecondReportDTO} from "../model/SecondReportDTO";

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

  firstReportUrl: string = 'http://35.239.210.35:8080/firstReport';
  secondReportUrl: string = 'http://35.239.210.35:8080/secondReport';

  constructor(private http: HttpClient) {
  }

  firstReport(): Observable<FirstReportDTO[]> {
    return this.http.get<FirstReportDTO[]>(this.firstReportUrl, httpOptions);
  }

  secondReport(): Observable<SecondReportDTO[]> {
    return this.http.get<SecondReportDTO[]>(this.secondReportUrl, httpOptions);
  }
}
