import {Component, Input, OnInit} from '@angular/core';
import {Hobby} from "../../model/Hobby";

@Component({
  selector: 'app-hobby-comp',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {

  @Input()
  hobby:Hobby = new Hobby();
  constructor() { }

  ngOnInit(): void {
  }

}

