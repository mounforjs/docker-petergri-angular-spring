import { Component, OnInit } from '@angular/core';
import {Hobby} from "../../model/Hobby";

@Component({
  selector: 'app-new-hobby',
  templateUrl: './new-hobby.component.html',
  styleUrls: ['./new-hobby.component.css']
})
export class NewHobbyComponent implements OnInit {

  hobbies:Hobby[] = [];
  constructor() { }

  ngOnInit(): void {
    let hobby1: Hobby = new Hobby();
    hobby1.name = "Hobby1";

    let hobby2: Hobby = new Hobby();
    hobby2.name = "Hobby2";

    let hobby3: Hobby = new Hobby();
    hobby3.name = "Hobby3";

    this.hobbies.push(hobby1, hobby2, hobby3);
  }

}
