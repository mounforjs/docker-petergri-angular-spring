import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/UserService";
import {User} from "../../model/User";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {

  }

  onSubmit(form: any) {
    let user: User = new User();
    user.userName = form.userName;
    user.userPassword = form.password;
    this.userService.getUser(user).subscribe(foundUser => {
      if(foundUser != null){
        this.router.navigate(['/chatMenu']);
      } else {
        alert("User not found!");
      }
    });



  }


}
