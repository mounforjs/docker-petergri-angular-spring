import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/UserService";
import {User} from "../../model/User";
import {SessionService} from "../../service/SessionService";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    if(SessionService.getCurrentUser() === undefined) {
      this.router.navigate(['/login']);
    }
  }

  onSubmit(form: any) {
    let user: User = new User();
    user.userName = form.userName;
    user.userPassword = form.password;
    this.userService.getUser(user).subscribe(foundUser => {
      if(foundUser != null){
        SessionService.setCurrentUser(foundUser);
        this.router.navigate(['/chatMenu']);
      } else {
        alert("User not found!");
      }
    });
  }


}
