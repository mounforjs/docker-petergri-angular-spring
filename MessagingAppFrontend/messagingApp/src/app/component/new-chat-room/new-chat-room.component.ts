import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../service/UserService";
import {ChatService} from "../../service/ChatService";
import {ChatDTO} from "../../model/ChatDTO";

@Component({
  selector: 'new-chat-room',
  templateUrl: './new-chat-room.component.html',
  styleUrls: ['./new-chat-room.component.css']
})
export class NewChatRoomComponent implements OnInit {

  users:User[] = [];
  usersForNewChatRoom:User[] = []
  constructor(private userService: UserService, private chatService:ChatService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
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

  createNewChatRoom(form:any) {
    let chat:ChatDTO = new ChatDTO();
    chat.chatName = form.chatName;
    chat.chatDescription = form.chatDescription;
    chat.creatorId = "1";
    this.chatService.addNewChat(chat).subscribe(user => {
      console.log("Chat added")
    });
  }
}
