import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/UserService";
import {User} from "../../model/User";
import {Router} from "@angular/router";
import {SessionService} from "../../service/SessionService";
import {AdminService} from "../../service/AdminService";

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private adminService: AdminService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    if (form.password != '' && form.password === form.confirmPassword) {
      let user: User = new User();
      // console.log(form)
      user.userName = form.userName;
      user.userPassword = form.password;
      this.userService.addUser(user).subscribe(user => {
        if(user != null){
          SessionService.setCurrentUser(user);
          user.userId = user.userId;
          this.router.navigate(['/chatMenu']);
        } else {
          alert("User not found!");
        }
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
