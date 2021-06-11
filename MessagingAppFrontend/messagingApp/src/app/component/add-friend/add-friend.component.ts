import { Component, OnInit } from '@angular/core';
import {FriendService} from "../../service/FriendService";
import {UserService} from "../../service/UserService";

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
    this.userService.getViaName(result.username).then(userFound=>{
      if(userFound != null) {
        this.friendService.addFriend(userFound.userId).subscribe();
      }
      else {
        alert("User with name " + result.username + " was not found!");
      }
    });
  }

}
