import { Component, OnInit } from '@angular/core';
import {Chat} from "../../model/Chat";
import {Router} from "@angular/router";
import {Message} from "../../model/Message";
import {ChatService} from "../../service/ChatService";
import {ChatDTO} from "../../model/ChatDTO";

@Component({
  selector: 'chat-menu',
  templateUrl: './chat-menu.component.html',
  styleUrls: ['./chat-menu.component.css']
})
export class ChatMenuComponent implements OnInit {

  chats:ChatDTO[] = []

  constructor(private router:Router, private chatService:ChatService) { }

  ngOnInit(): void {
    this.chatService.getChats().subscribe(chats => {
      this.chats = chats;
      console.log(chats)
    });
  }

  createNewChat() {
    this.router.navigate(['/createChatRoom']);
  }

  chooseNewHobby() {
    this.router.navigate(['/chooseHobby']);
  }

  validateAdmin() {
    this.router.navigate(['/adminValidation']);
  }
}
