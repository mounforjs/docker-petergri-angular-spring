import { Component, OnInit } from '@angular/core';
import {FriendService} from "../service/FriendService";
import {UserService} from "../service/UserService";

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {
  constructor(private friendService:FriendService, private userService:UserService) { }

  ngOnInit(): void {
  }

  onClickSubmit(result: { username: string }) {
    console.log("Success");
    this.userService.getViaName(result.username).subscribe(userFound=>{
      if(userFound != null) {
        console.log(userFound.userId)
        this.friendService.addFriend(userFound.userId).subscribe();
      }
    });
  }

}
