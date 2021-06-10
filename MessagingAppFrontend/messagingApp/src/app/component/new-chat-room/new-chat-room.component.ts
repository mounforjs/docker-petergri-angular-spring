import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../service/UserService";
import {ChatService} from "../../service/ChatService";
import {ChatDTO} from "../../model/ChatDTO";
import {SessionService} from "../../service/SessionService";
import {Admin} from "../../model/Admin";
import {Router} from "@angular/router";

@Component({
  selector: 'new-chat-room',
  templateUrl: './new-chat-room.component.html',
  styleUrls: ['./new-chat-room.component.css']
})
export class NewChatRoomComponent implements OnInit {

  users:User[] = [];
  usersForNewChatRoom:User[] = []
  constructor(private router: Router, private userService: UserService, private chatService:ChatService) { }

  ngOnInit(): void {
    if(SessionService.getCurrentUser() === undefined) {
      this.router.navigate(['/login']);
    }
    this.userService.getUsers().subscribe(users => {
      for(let user in users) {
        if(SessionService.getCurrentUser().userId != users[user].userId) {
          this.users.push(users[user]);
        }
      }
    });
  }

  addUserToNewChat(user: User) {
    console.log("Clicked on a user")
    if(this.usersForNewChatRoom.includes(user)){
      const index = this.usersForNewChatRoom.indexOf(user, 0);
      if (index > -1) {
        this.usersForNewChatRoom.splice(index, 1);
      }
    } else {
      this.usersForNewChatRoom.push(user);
    }
  }

  getMembers() {

  }

  createNewChatRoom(form:any) {
    let chat:ChatDTO = new ChatDTO();
    chat.chatName = form.chatName;
    chat.chatDescription = form.chatDescription;
    chat.creatorId = SessionService.getCurrentUser().userId;
    if(SessionService.isAdmin === true) {
      this.chatService.addNewChat(chat).then(foundChat => {

      });
      this.chatService.getChatUsingNameAndCreatorId(chat).then(foundChat=>{
        if(foundChat!=null) {
          this.chatService.addMemberToChat(foundChat.chatId, foundChat.creatorId).then();
          for (let member in this.usersForNewChatRoom) {
            this.chatService.addMemberToChat(foundChat.chatId, this.usersForNewChatRoom[member].userId).then();
          }
        }
      })
    }
    else {
      alert("Only admins can create chatrooms");
    }
    this.router.navigate(['chatMenu/']);
  }
}
