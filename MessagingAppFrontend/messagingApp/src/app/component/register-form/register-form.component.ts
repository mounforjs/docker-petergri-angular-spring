import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    if ((form.password === form.confirmPassword) && this.usernameCheck(form.userName)) {
      //save user to db
    } else {
      // error
    }
  }

  usernameCheck(userName:string) {
    //check if user already exist
    return false;
  }

}
