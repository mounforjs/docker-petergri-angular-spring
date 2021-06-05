import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-validation',
  templateUrl: './admin-validation.component.html',
  styleUrls: ['./admin-validation.component.css']
})
export class AdminValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(form)
  }
}
