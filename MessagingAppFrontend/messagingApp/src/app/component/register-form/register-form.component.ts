import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/UserService";
import {User} from "../../model/User";
import {Router} from "@angular/router";
import {SessionService} from "../../service/SessionService";

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    if (form.password != '' && form.password === form.confirmPassword) {
      let user: User = new User();
      // console.log(form)
      user.userName = form.userName;
      user.userPassword = form.password;
      SessionService.setCurrentUser(user);
      this.userService.addUser(user).subscribe(user => {
        this.router.navigate(['/chatMenu']);
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
