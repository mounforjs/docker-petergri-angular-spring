import { Component, OnInit } from '@angular/core';
import {ReportsService} from "../../service/ReportsService";
import {SecondReportDTO} from "../../model/SecondReportDTO";

@Component({
  selector: 'app-second-report',
  templateUrl: './second-report.component.html',
  styleUrls: ['./second-report.component.css']
})
export class SecondReportComponent implements OnInit {
  result: SecondReportDTO[] | undefined;

  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {
    this.reportsService.secondReport().subscribe(result=>{
        this.result = result;
      }
    )
  }

}
