import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";

@Component({
  selector: 'new-chat-room',
  templateUrl: './new-chat-room.component.html',
  styleUrls: ['./new-chat-room.component.css']
})
export class NewChatRoomComponent implements OnInit {

  users:User[] = [];
  usersForNewChatRoom:User[] = []
  constructor() { }

  ngOnInit(): void {
    let user1 = new User();
    user1.userName = "User 21";
    let user2 = new User();
    user2.userName = "User 32";
    let user3 = new User();
    user3.userName = "User 51";
    this.users.push(user1,user2,user3);
  }

  addUserToNewChat(user: User) {
    if(this.usersForNewChatRoom.includes(user)){
      const index = this.usersForNewChatRoom.indexOf(user, 0);
      if (index > -1) {
        this.usersForNewChatRoom.splice(index, 1);
      }
    } else {
      this.usersForNewChatRoom.push(user);
    }
  }


  createNewChatRoom() {
    // in der Datenbank ein neues ChatRoom erstellen mit den ausgewählten Usern
  }
}
