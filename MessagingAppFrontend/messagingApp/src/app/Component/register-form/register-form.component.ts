import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  username: string = "";
  password1: string = "";
  password2: string = "";


  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {

    this.username = form.userName;
    this.password1 = form.password;
    this.password2 = form.confirmPassword;

    if ((this.password1 === this.password2) && this.usernameCheck()) {
      //save user to db
    } else {
      // error
    }
  }

  usernameCheck() {
    //check if user already exist
    return false;
  }

}
