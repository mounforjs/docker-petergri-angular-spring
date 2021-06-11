import { Component, OnInit } from '@angular/core';
import {FirstReportDTO} from "../../model/FirstReportDTO";
import {ReportsService} from "../../service/ReportsService";

@Component({
  selector: 'app-first-report',
  templateUrl: './first-report.component.html',
  styleUrls: ['./first-report.component.css']
})
export class FirstReportComponent implements OnInit {
  result: FirstReportDTO[] | undefined;

  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {
    this.reportsService.firstReport().subscribe(result=>{
        this.result = result;
      }
    )
  }

}
