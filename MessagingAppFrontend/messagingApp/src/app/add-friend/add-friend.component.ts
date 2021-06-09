import { Component, OnInit } from '@angular/core';
import {FriendService} from "../service/FriendService";
import {UserService} from "../service/UserService";
import {User} from "../model/User";

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {
  constructor(private friendService:FriendService, private userService:UserService) { }

  ngOnInit(): void {
  }

  onClickSubmit(result: { username: string; }) {
    this.userService.getUserWithName(result.username).subscribe(userFound=>{
      console.log(userFound);
      if(userFound != null) {
        console.log(result);
        this.friendService.addFriend(userFound.userId).subscribe();
      }
    });
  }

}
