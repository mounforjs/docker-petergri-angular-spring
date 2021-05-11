import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/UserService";
import {User} from "../../model/User";

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    if ((form.password === form.confirmPassword)) {
      let user: User = new User();
      console.log(form)
      user.userName = form.userName;
      user.userPassword = form.password;
      this.userService.addUser(user).subscribe(user => {
        console.log("User added")
      });
    } else {
      console.log("Error")
    }
  }

  usernameCheck(userName: string) {
    //check if user already exist
    return false;
  }

}
