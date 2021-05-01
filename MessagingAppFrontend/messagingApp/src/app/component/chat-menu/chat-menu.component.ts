import { Component, OnInit } from '@angular/core';
import {Chat} from "../../model/Chat";
import {Router} from "@angular/router";

@Component({
  selector: 'chat-menu',
  templateUrl: './chat-menu.component.html',
  styleUrls: ['./chat-menu.component.css']
})
export class ChatMenuComponent implements OnInit {

  chats:Chat[] = []

  constructor(private router:Router) { }

  ngOnInit(): void {
    let chat1 = new Chat();
    chat1.name = "Chat 1";
    let chat2 = new Chat();
    chat2.name = "Chat 2";
    let chat3 = new Chat();
    chat3.name = "Chat 5";
    this.chats.push(chat1,chat2,chat3);
  }

  createNewChat() {
    this.router.navigate(['/createChatRoom']);
  }

  chooseNewHobby() {
    this.router.navigate(['/chooseHobby']);
  }

  showChatScreen() {
    this.router.navigate(['/chat']);
  }
}
